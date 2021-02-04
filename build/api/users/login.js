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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generate_token_1 = __importDefault(require("../token/generate_token"));
const json_validator_1 = __importDefault(require("../middleware/json_validator"));
const user_schema_1 = __importDefault(require("./user_schema"));
const router = express_1.default();
router.post('/login', json_validator_1.default({ body: user_schema_1.default }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = yield req.body;
        const user = yield knex_models_1.GetOne('users', 'email', email).first();
        if (user && bcryptjs_1.default.compareSync(password, user.password)) {
            const token = generate_token_1.default(user);
            if (token) {
                response_messages_1.default.getOk(res, token);
            }
        }
        else {
            response_messages_1.default.unauthorized(res, 'invalid email or password');
        }
    }
    catch (err) {
        response_messages_1.default.catchAllError(res, err);
    }
}));
module.exports = router;
