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
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const generateSeeds_1 = __importDefault(require("../../../util/generateSeeds"));
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        let types = [
            'stocks',
            'bonds',
            'mutual fund',
            'exchange traded fund',
            'certificate of deposit',
            'retirement',
            'options',
            'crypto currency',
            'commodities',
            'other'
        ];
        yield knex("types").del();
        const insertValue = generateSeeds_1.default(types, 'type');
        yield knex("types").insert(insertValue);
    });
}
exports.seed = seed;
;
