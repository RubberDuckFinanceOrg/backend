"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const knex_models_1 = require("../../util/knex_models");
const response_messages_1 = __importDefault(require("../../util/response_messages"));
const authorization_1 = __importDefault(require("../middleware/authorization"));
const affiliate_schema_1 = __importDefault(require("./affiliate_schema"));
const json_validator_1 = __importDefault(require("../middleware/json_validator"));
const router = express_1.default();
router.put('/affiliate/:id', authorization_1.default, json_validator_1.default({ body: affiliate_schema_1.default }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const affiliateData = yield req.body;
        // check to see if user has submitted unique affiliate code
        const valueExists = yield knex_models_1.recordCheck('affiliate', affiliateData.code);
        if (valueExists) {
            return response_messages_1.default.conflict(res, 'Affiliate code');
        }
        const editAffiliate = yield knex_models_1.Edit('affiliate', 'id', id, affiliateData);
        response_messages_1.default.okOrNotFound('edit', res, editAffiliate, 'affiliate');
    }
    catch (err) {
        response_messages_1.default.catchAllError(res, err);
    }
}));
module.exports = router;
