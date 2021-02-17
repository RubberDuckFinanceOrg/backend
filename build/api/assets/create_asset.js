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
const json_validator_1 = __importDefault(require("../middleware/json_validator"));
const asset_schema_1 = __importDefault(require("./asset_schema"));
const authorization_1 = __importDefault(require("../middleware/authorization"));
const router = express_1.default();
router.post('/assets', authorization_1.default, json_validator_1.default({ body: asset_schema_1.default }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const asset = yield req.body;
        yield knex_models_1.Create('assets', asset);
        response_messages_1.default.createOk(res, 'asset');
    }
    catch (err) {
        response_messages_1.default.catchAllError(res, err);
    }
}));
module.exports = router;
