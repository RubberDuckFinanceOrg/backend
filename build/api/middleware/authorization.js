"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const response_messages_1 = __importDefault(require("../../util/response_messages"));
const jwtSecret = process.env.SECRET;
const Authorization = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
        if (jwtSecret) {
            jsonwebtoken_1.default.verify(authorization, jwtSecret, (err, decodedToken) => {
                if (err) {
                    response_messages_1.default.unauthorized(res, 'Token is Invalid');
                }
                else {
                    res.locals.jwt = decodedToken;
                    next();
                }
            });
        }
    }
    else {
        response_messages_1.default.unauthorized(res, 'Missing Token');
    }
};
module.exports = Authorization;
