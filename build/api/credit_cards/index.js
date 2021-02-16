"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_cc_1 = __importDefault(require("./create_cc"));
const delete_cc_1 = __importDefault(require("./delete_cc"));
const edit_cc_1 = __importDefault(require("./edit_cc"));
const get_cc_1 = __importDefault(require("./get_cc"));
const get_ccs_1 = __importDefault(require("./get_ccs"));
exports.default = {
    createCreditCard: create_cc_1.default,
    deleteCreditCard: delete_cc_1.default,
    editCreditCard: edit_cc_1.default,
    getCreditCard: get_cc_1.default,
    getCreditCards: get_ccs_1.default
};
