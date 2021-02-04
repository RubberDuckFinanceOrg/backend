"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_profile_1 = __importDefault(require("./create_profile"));
const delete_profile_1 = __importDefault(require("./delete_profile"));
const edit_profile_1 = __importDefault(require("./edit_profile"));
const get_profile_1 = __importDefault(require("./get_profile"));
const get_profiles_1 = __importDefault(require("./get_profiles"));
exports.default = {
    createProfile: create_profile_1.default,
    deleteProfile: delete_profile_1.default,
    editProfile: edit_profile_1.default,
    getProfiles: get_profiles_1.default,
    getProfile: get_profile_1.default
};
