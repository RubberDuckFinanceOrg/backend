"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_asset_1 = __importDefault(require("./create_asset"));
const delete_asset_1 = __importDefault(require("./delete_asset"));
const edit_asset_1 = __importDefault(require("./edit_asset"));
const get_asset_1 = __importDefault(require("./get_asset"));
const get_assets_1 = __importDefault(require("./get_assets"));
exports.default = {
    createAsset: create_asset_1.default,
    deleteAsset: delete_asset_1.default,
    editAsset: edit_asset_1.default,
    getAsset: get_asset_1.default,
    getAssets: get_assets_1.default
};
