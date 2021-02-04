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
const server = express_1.default();
// General
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.use(cors_1.default());
server.use(helmet_1.default());
// Routes
server.use('/', index_1.default);
// Error Handling
server.use(problems_details_response_1.default(problem_types_1.default));
module.exports = server;
