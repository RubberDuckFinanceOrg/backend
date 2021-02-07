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
const bank_schema_1 = __importDefault(require("./bank_schema"));
const json_validator_1 = __importDefault(require("../middleware/json_validator"));
const router = express_1.default();
router.put('/banks/:id', authorization_1.default, json_validator_1.default({ body: bank_schema_1.default }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const bankData = yield req.body;
        const editBank = yield knex_models_1.Edit('banks', 'id', id, bankData);
        if (editBank) {
            response_messages_1.default.createOk(res, 'bank');
        }
        else {
            response_messages_1.default.notFound(res, 'bank');
        }
    }
    catch (err) {
        response_messages_1.default.catchAllError(res, err);
    }
}));
module.exports = router;
