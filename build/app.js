"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const index_1 = __importDefault(require("./api/routes/index"));
const problem_types_1 = __importDefault(require("./api/config/problem_types"));
const problems_details_response_1 = __importDefault(require("./api/middleware/problems_details_response"));
const response_messages_1 = __importDefault(require("./util/response_messages"));
const app = express_1.default();
// General
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use(helmet_1.default());
// Routes
app.use('/', index_1.default);
// Error Handling
app.use(problems_details_response_1.default(problem_types_1.default));
// 404
app.get('*', function (req, res) {
    response_messages_1.default.notFound(res, 'endpoint');
});
module.exports = app;
