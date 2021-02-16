"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_isa_1 = __importDefault(require("./create_isa"));
const delete_isa_1 = __importDefault(require("./delete_isa"));
const edit_isa_1 = __importDefault(require("./edit_isa"));
const get_isa_1 = __importDefault(require("./get_isa"));
const get_isas_1 = __importDefault(require("./get_isas"));
exports.default = {
    createIsa: create_isa_1.default,
    deleteIsa: delete_isa_1.default,
    editIsa: edit_isa_1.default,
    getIsa: get_isa_1.default,
    getIsas: get_isas_1.default
};
