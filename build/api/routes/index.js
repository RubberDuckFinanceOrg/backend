"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const index_1 = __importDefault(require("../users/index"));
const index_2 = __importDefault(require("../profiles/index"));
const index_3 = __importDefault(require("../banks/index"));
const index_4 = __importDefault(require("../income/index"));
const index_5 = __importDefault(require("../expenses/index"));
const index_6 = __importDefault(require("../loans/index"));
const index_7 = __importDefault(require("../credit_cards/index"));
const index_8 = __importDefault(require("../assets/index"));
const index_9 = __importDefault(require("../isa/index"));
const index_10 = __importDefault(require("../affiliate/index"));
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
// bank routes
router.use('/api', index_3.default.createBank);
router.use('/api', index_3.default.deleteBank);
router.use('/api', index_3.default.editBank);
router.use('/api', index_3.default.getBank);
router.use('/api', index_3.default.getBanks);
router.use('/api', index_3.default.getTimeline);
// transfer routes
// income routes
router.use('/api', index_4.default.createIncome);
router.use('/api', index_4.default.deleteIncome);
router.use('/api', index_4.default.editIncome);
router.use('/api', index_4.default.getIncome);
router.use('/api', index_4.default.getIncomes);
// expense routes
router.use('/api', index_5.default.createExpense);
router.use('/api', index_5.default.deleteExpense);
router.use('/api', index_5.default.editExpense);
router.use('/api', index_5.default.getExpense);
router.use('/api', index_5.default.getExpenses);
// loan routes
router.use('/api', index_6.default.createLoan);
router.use('/api', index_6.default.deleteLoan);
router.use('/api', index_6.default.editLoan);
router.use('/api', index_6.default.getLoan);
router.use('/api', index_6.default.getLoans);
// credit card routes
router.use('/api', index_7.default.createCreditCard);
router.use('/api', index_7.default.deleteCreditCard);
router.use('/api', index_7.default.editCreditCard);
router.use('/api', index_7.default.getCreditCard);
router.use('/api', index_7.default.getCreditCards);
// asset routes
router.use('/api', index_8.default.createAsset);
router.use('/api', index_8.default.deleteAsset);
router.use('/api', index_8.default.editAsset);
router.use('/api', index_8.default.getAsset);
router.use('/api', index_8.default.getAssets);
// isa routes
router.use('/api', index_9.default.createIsa);
router.use('/api', index_9.default.editIsa);
router.use('/api', index_9.default.deleteIsa);
router.use('/api', index_9.default.getIsa);
router.use('/api', index_9.default.getIsas);
// affiliate routes
router.use('/api', index_10.default.createAffiliate);
router.use('/api', index_10.default.editAffiliate);
router.use('/api', index_10.default.deleteAffiliate);
router.use('/api', index_10.default.getAffiliate);
router.use('/api', index_10.default.getAffiliates);
module.exports = router;
