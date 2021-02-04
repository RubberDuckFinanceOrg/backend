import jwt from 'jsonwebtoken'
import Express from 'express'
import status from '../../util/response_messages'
const jwtSecret = process.env.SECRET;


const Authorization = (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  const { authorization } = req.headers;

  if (authorization) {
    if (jwtSecret) {
      jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
        if (err) {
          status.unauthorized(res, 'Token is Invalid')
        } else {
          res.locals.jwt = decodedToken
          next();
        }
      });
    }
  } else {
    status.unauthorized(res, 'Missing Token')
  }
};

export = Authorization
