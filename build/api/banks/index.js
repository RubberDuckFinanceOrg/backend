"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_bank_1 = __importDefault(require("./create_bank"));
const delete_bank_1 = __importDefault(require("./delete_bank"));
const edit_bank_1 = __importDefault(require("./edit_bank"));
const get_bank_1 = __importDefault(require("./get_bank"));
const get_banks_1 = __importDefault(require("./get_banks"));
exports.default = {
    createBank: create_bank_1.default,
    deleteBank: delete_bank_1.default,
    editBank: edit_bank_1.default,
    getBank: get_bank_1.default,
    getBanks: get_banks_1.default
};
