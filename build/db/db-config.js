"use strict";
// import Knex from "knex";
// import knexConfig from "../knexfile";
// export = Knex(knexConfig.development);
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const knex_1 = __importDefault(require("knex"));
// const config: Config = require('../knexfile').development;
const knexfile_1 = __importDefault(require("../knexfile"));
// !! change development to production for heroku
// TODO: Create type for config
const db = knex_1.default(knexfile_1.default.development);
module.exports = db;
