"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_loan_1 = __importDefault(require("./create_loan"));
const get_loan_1 = __importDefault(require("./get_loan"));
const get_loans_1 = __importDefault(require("./get_loans"));
const edit_loan_1 = __importDefault(require("./edit_loan"));
const delete_loan_1 = __importDefault(require("./delete_loan"));
exports.default = {
    createLoan: create_loan_1.default,
    editLoan: edit_loan_1.default,
    deleteLoan: delete_loan_1.default,
    getLoan: get_loan_1.default,
    getLoans: get_loans_1.default
};
