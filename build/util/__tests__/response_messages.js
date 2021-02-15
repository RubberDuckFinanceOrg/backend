"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_messages_1 = __importDefault(require("../response_messages"));
const jest_mock_1 = __importDefault(require("jest-mock"));
describe('Testing response message middleware', () => {
    test('Get request with no key returns 200 ok and proper json object', () => {
        const res = {
            json: jest_mock_1.default.fn(() => res), status: jest_mock_1.default.fn(() => res)
        };
        const users = [{ name: 'matt' }, { name: 'jess' }];
        response_messages_1.default.getOk(res, users);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith([{ name: 'matt' }, { name: 'jess' }]);
        expect(res.json).toHaveBeenCalledTimes(1);
    });
    test('Get request with key returns 200 ok and proper json object', () => {
        const res = {
            json: jest_mock_1.default.fn(() => res), status: jest_mock_1.default.fn(() => res)
        };
        const users = [{ name: 'matt' }, { name: 'jess' }];
        response_messages_1.default.getOk(res, users, 'users');
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({ users: [{ name: "matt" }, { name: "jess" }] });
        expect(res.json).toHaveBeenCalledTimes(1);
    });
    test('Create request returns 201 ok and proper json object', () => {
        const res = {
            json: jest_mock_1.default.fn(() => res), status: jest_mock_1.default.fn(() => res)
        };
        const testInput = 'test';
        response_messages_1.default.createOk(res, testInput);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({ message: `Successfully created ${testInput}` });
        expect(res.json).toHaveBeenCalledTimes(1);
    });
    test('Put request returns 200 ok and proper json object', () => {
        const res = {
            json: jest_mock_1.default.fn(() => res), status: jest_mock_1.default.fn(() => res)
        };
        const testInput = 'test';
        response_messages_1.default.updateOk(res, testInput);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({ message: `Successfully updated ${testInput}` });
        expect(res.json).toHaveBeenCalledTimes(1);
    });
    test('Delete request returns 200 ok and proper json object', () => {
        const res = {
            json: jest_mock_1.default.fn(() => res), status: jest_mock_1.default.fn(() => res)
        };
        const testInput = 'test';
        response_messages_1.default.deleteOk(res, testInput);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({ message: `Successfully deleted ${testInput}` });
        expect(res.json).toHaveBeenCalledTimes(1);
    });
    test("Unauthorized returns 401 with proper json object", () => {
        const res = {
            json: jest_mock_1.default.fn(() => res), status: jest_mock_1.default.fn(() => res)
        };
        const authorizationMessage = 'You do not have permission';
        response_messages_1.default.unauthorized(res, authorizationMessage);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({ errorMessage: authorizationMessage });
        expect(res.json).toHaveBeenCalledTimes(1);
    });
    test("Not Found returns 404 with proper json object", () => {
        const res = {
            json: jest_mock_1.default.fn(() => res), status: jest_mock_1.default.fn(() => res)
        };
        const notFoundValue = 'Test';
        response_messages_1.default.notFound(res, notFoundValue);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({ errorMessage: `${notFoundValue} does not exist` });
        expect(res.json).toHaveBeenCalledTimes(1);
    });
    test("Conflict returns 409 with proper json object", () => {
        const res = {
            json: jest_mock_1.default.fn(() => res), status: jest_mock_1.default.fn(() => res)
        };
        const existingValue = 'Test';
        response_messages_1.default.conflict(res, existingValue);
        expect(res.status).toHaveBeenCalledWith(409);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({ errorMessage: `${existingValue} already exists` });
        expect(res.json).toHaveBeenCalledTimes(1);
    });
    test("Catch all error returns 500 and proper json object", () => {
        const error = { error: 'error' };
        const res = {
            json: jest_mock_1.default.fn(() => res), status: jest_mock_1.default.fn(() => res)
        };
        response_messages_1.default.catchAllError(res, error);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(error).toMatchObject({ error: 'error' });
        expect(res.json).toHaveBeenCalledWith({ errorMessage: 'unexpected error' });
        expect(res.json).toHaveBeenCalledTimes(1);
    });
});
