"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Get request has succeeded and returns 200 json
function getOk(res, value, key) {
    const jsonInput = {};
    if (key) {
        jsonInput[key] = value;
        return res.status(200).json(jsonInput);
    }
    return res.status(200).json(value);
}
// Post request has succeeded and returns 201 successfully created
function createOk(res, value) {
    return res.status(201).json({ message: `Successfully created ${value}` });
}
// Put request has succeeded and returns 200 successfully updated
function updateOk(res, value) {
    return res.status(200).json({ message: `Successfully updated ${value}` });
}
// Delete request has succeeded and returns 200 successfully deleted
function deleteOk(res, value) {
    return res.status(200).json({ message: `Successfully deleted ${value}` });
}
// The request has succeeded but user is unauthorized to access returns 401
function unauthorized(res, value) {
    return res.status(401).json({ errorMessage: `${value}` });
}
// The server did not find the resource the user was looking for returns 404 does not exist
function notFound(res, value) {
    return res.status(404).json({ errorMessage: `${value} does not exist` });
}
// Resource already exists returns 409 already exists
function conflict(res, value) {
    return res.status(409).json({ errorMessage: `${value} already exists` });
}
// The user does not have permission returns 405 not allowed
function notAllowed(res, value) {
    return res.status(405).json({ errorMessage: `Now allowed` });
}
// No content provided returns 204 missing arguments.
function noContent(res) {
    return res.status(204).json({ errorMessage: `Missing required fields` });
}
// General catch all returns 500 unexpected
function catchAllError(res, err) {
    console.log('handling', err);
    return res.status(500).json({ errorMessage: 'unexpected error' });
}
function okOrNotFound(operation, res, knexValue, value) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const operations = {
                edit: updateOk,
                delete: deleteOk,
                get: getOk
            };
            const action = operations[operation];
            // is knex value an array? -> used for getting an individual value
            if (Array.isArray(knexValue)) {
                if (knexValue.length) {
                    return operations.get(res, knexValue);
                }
                else {
                    return notFound(res, value);
                }
            }
            // is knex value returning a 1 or 0. 1 => action performed on DB, 0  => not found
            if (knexValue) {
                return action(res, value);
            }
            else {
                return notFound(res, value);
            }
        }
        catch (err) {
            return res.status(500).json({ errorMessage: 'Invalid input' });
        }
    });
}
exports.default = {
    getOk,
    createOk,
    updateOk,
    deleteOk,
    unauthorized,
    notFound,
    conflict,
    notAllowed,
    noContent,
    catchAllError,
    okOrNotFound
};
