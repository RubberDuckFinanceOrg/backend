import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from './api/routes/index'
import problemTypes from './api/config/problem_types'
import configureProblemDetailsResponse from './api/middleware/problems_details_response'
import status from './util/response_messages'

const app: express.Application = express();
// General
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(helmet());
// Routes
app.use('/', routes)
// Error Handling
app.use(configureProblemDetailsResponse(problemTypes));
// 404
app.get('*', function (req, res) {
  status.notFound(res, 'endpoint')
});


export = app
