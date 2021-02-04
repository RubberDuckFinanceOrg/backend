"use strict";
const defaultProblemDetails = {
    type: 'unexpected error',
    status: 500
};
// function getProblemDetailsForError({ error, problemTypes }: { error: Error, problemTypes: { matchErrorClass?: any }[] }) {
function getProblemDetailsForError({ error, problemTypes }) {
    const problemType = problemTypes.find((problemType) => {
        return error instanceof problemType.matchErrorClass;
    });
    if (!problemType) {
        return defaultProblemDetails;
    }
    const problemDetails = Object.assign(Object.assign({}, problemType.details), problemType.occurrenceDetails(error));
    return problemDetails;
}
function configureProblemDetailsResponse(problemTypes) {
    return function problemDetailsResponseMiddleware(error, request, response, next) {
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
module.exports = configureProblemDetailsResponse;
