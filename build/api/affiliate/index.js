"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_affiliate_1 = __importDefault(require("./create_affiliate"));
const delete_affiliate_1 = __importDefault(require("./delete_affiliate"));
const edit_affiliate_1 = __importDefault(require("./edit_affiliate"));
const get_affiliate_1 = __importDefault(require("./get_affiliate"));
const get_affiliates_1 = __importDefault(require("./get_affiliates"));
exports.default = {
    createAffiliate: create_affiliate_1.default,
    deleteAffiliate: delete_affiliate_1.default,
    editAffiliate: edit_affiliate_1.default,
    getAffiliate: get_affiliate_1.default,
    getAffiliates: get_affiliates_1.default
};
