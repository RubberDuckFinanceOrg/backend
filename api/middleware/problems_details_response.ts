import Express from 'express'

const defaultProblemDetails = {
  type: 'unexpected error',
  status: 500
};

// function getProblemDetailsForError({ error, problemTypes }: { error: Error, problemTypes: { matchErrorClass?: any }[] }) {
function getProblemDetailsForError({ error, problemTypes }: { error: Error, problemTypes: { [input: string]: any } }) {
  const problemType = problemTypes.find((problemType: any) => {
    return error instanceof problemType.matchErrorClass;
  });

  if (!problemType) {
    return defaultProblemDetails;
  }

  const problemDetails = {
    ...problemType.details,
    ...problemType.occurrenceDetails(error)
  };

  return problemDetails;
}

function configureProblemDetailsResponse(problemTypes: any) {
  return function problemDetailsResponseMiddleware(
    error: any,
    request: Express.Request,
    response: Express.Response,
    next: Express.NextFunction
  ) {
    if (response.headersSent) {
      return next(error);
    }

    const problemDetails = getProblemDetailsForError({
      error,
      problemTypes
    });

    if (!problemDetails.status) {
      problemDetails.status = error.statusCode || 500;
    }

    response.set('Content-Type', 'application/problem+json');
    response.status(problemDetails.status).json(problemDetails);

    next();
  };
}

export = configureProblemDetailsResponse
