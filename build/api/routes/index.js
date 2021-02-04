"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const index_1 = __importDefault(require("../users/index"));
const index_2 = __importDefault(require("../profiles/index"));
const express_1 = require("express");
const router = express_1.Router();
router.get("/", (req, res) => {
    res.json({ message: "Server is live!" });
});
// user routes
router.use('/api', index_1.default.login);
router.use('/api', index_1.default.register);
router.use('/api', index_1.default.getUsers);
// profile routes
router.use('/api', index_2.default.createProfile);
router.use('/api', index_2.default.deleteProfile);
router.use('/api', index_2.default.editProfile);
router.use('/api', index_2.default.getProfile);
router.use('/api', index_2.default.getProfiles);
module.exports = router;
