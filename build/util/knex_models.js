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
exports.GetTimeline = exports.recordCheck = exports.Users = exports.GetAll = exports.GetOne = exports.Delete = exports.Edit = exports.Create = void 0;
const db_config_1 = __importDefault(require("../db/db-config"));
const generate_location_1 = __importDefault(require("./generate_location"));
// Create a record
function Create(database, data) {
    return db_config_1.default(database).insert(data);
}
exports.Create = Create;
// Edit a record
function Edit(database, key, id, data) {
    const location = generate_location_1.default(key, id);
    return db_config_1.default(database)
        .where(location)
        .update(data);
}
exports.Edit = Edit;
// Delete a record
function Delete(database, key, id) {
    const location = generate_location_1.default(key, id);
    return db_config_1.default(database)
        .where(location)
        .delete();
}
exports.Delete = Delete;
// Returns all records
function GetAll(database, key, id) {
    const location = generate_location_1.default(key, id);
    return db_config_1.default(database)
        .where(location)
        .orderBy('id');
}
exports.GetAll = GetAll;
// Returns a single record
function GetOne(database, key, id) {
    const location = generate_location_1.default(key, id);
    return db_config_1.default(database).where(location);
}
exports.GetOne = GetOne;
function recordCheck(database, key) {
    return __awaiter(this, void 0, void 0, function* () {
        const ref = yield db_config_1.default(database).where({ code: key });
        return (ref.length === 1);
    });
}
exports.recordCheck = recordCheck;
function GetTimeline(database, value) {
    console.log('database and value', database, value);
    return db_config_1.default(database)
        .where({ bank_name: value })
        .orderBy('id');
}
exports.GetTimeline = GetTimeline;
// ! Place holder for user testing purposes
function Users() {
    return db_config_1.default('users').select('email', 'id', 'referrer_id', 'referral_id');
}
exports.Users = Users;
