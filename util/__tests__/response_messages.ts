import status from '../response_messages';
import jest from 'jest-mock';
import { Response, Request } from 'express'
import { stat } from 'fs';

describe('Testing response message middleware', () => {

  test('Get request with no key returns 200 ok and proper json object', () => {
    const res: any = {
      json: jest.fn(() => res), status: jest.fn(() => res)
    }
    const users = [{ name: 'matt' }, { name: 'jess' }]
    status.getOk(res, users)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith([{ name: 'matt' }, { name: 'jess' }])
    expect(res.json).toHaveBeenCalledTimes(1)
  })

  test('Get request with key returns 200 ok and proper json object', () => {
    const res: any = {
      json: jest.fn(() => res), status: jest.fn(() => res)
    }
    const users = [{ name: 'matt' }, { name: 'jess' }]
    status.getOk(res, users, 'users')
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({ users: [{ name: "matt" }, { name: "jess" }] })
    expect(res.json).toHaveBeenCalledTimes(1)
  })

  test('Create request returns 201 ok and proper json object', () => {
    const res: any = {
      json: jest.fn(() => res), status: jest.fn(() => res)
    }
    const testInput = 'test'
    status.createOk(res, testInput)
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ message: `Successfully created ${testInput}` })
    expect(res.json).toHaveBeenCalledTimes(1)
  })

  test('Put request returns 200 ok and proper json object', () => {
    const res: any = {
      json: jest.fn(() => res), status: jest.fn(() => res)
    }
    const testInput = 'test'
    status.updateOk(res, testInput)
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ message: `Successfully updated ${testInput}` })
    expect(res.json).toHaveBeenCalledTimes(1)
  })

  test('Delete request returns 200 ok and proper json object', () => {
    const res: any = {
      json: jest.fn(() => res), status: jest.fn(() => res)
    }
    const testInput = 'test'
    status.deleteOk(res, testInput)
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ message: `Successfully deleted ${testInput}` })
    expect(res.json).toHaveBeenCalledTimes(1)
  })

  test("Unauthorized returns 401 with proper json object", () => {
    const res: any = {
      json: jest.fn(() => res), status: jest.fn(() => res)
    }
    const authorizationMessage = 'You do not have permission'
    status.unauthorized(res, authorizationMessage)
    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({ errorMessage: authorizationMessage })
    expect(res.json).toHaveBeenCalledTimes(1)
  });

  test("Not Found returns 404 with proper json object", () => {
    const res: any = {
      json: jest.fn(() => res), status: jest.fn(() => res)
    }
    const notFoundValue = 'Test'
    status.notFound(res, notFoundValue)
    expect(res.status).toHaveBeenCalledWith(404)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({ errorMessage: `${notFoundValue} does not exist` })
    expect(res.json).toHaveBeenCalledTimes(1)
  });

  test("Conflict returns 409 with proper json object", () => {
    const res: any = {
      json: jest.fn(() => res), status: jest.fn(() => res)
    }
    const existingValue = 'Test'
    status.conflict(res, existingValue)
    expect(res.status).toHaveBeenCalledWith(409)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({ errorMessage: `${existingValue} already exists` })
    expect(res.json).toHaveBeenCalledTimes(1)
  });


  test("Catch all error returns 500 and proper json object", () => {
    const error = { error: 'error' }
    const res: any = {
      json: jest.fn(() => res), status: jest.fn(() => res)
    }
    status.catchAllError(res, error)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(error).toMatchObject({ error: 'error' })
    expect(res.json).toHaveBeenCalledWith({ errorMessage: 'unexpected error' })
    expect(res.json).toHaveBeenCalledTimes(1)
  });
})
