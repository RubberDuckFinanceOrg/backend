import user from '../users/index'
import profile from '../profiles/index';
import bank from '../banks/index';
import income from '../income/index';
import expenses from '../expenses/index';
import loans from '../loans/index'
import creditCards from '../credit_cards/index';
import assets from '../assets/index';
import isa from '../isa/index';
import affiliate from '../affiliate/index';
import { Router, Request, Response } from 'express'

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is live!" });
});

// user routes
router.use('/api', user.login)
router.use('/api', user.register)
router.use('/api', user.getUsers)

// profile routes
router.use('/api', profile.createProfile);
router.use('/api', profile.deleteProfile)
router.use('/api', profile.editProfile)
router.use('/api', profile.getProfile)
router.use('/api', profile.getProfiles)

// bank routes
router.use('/api', bank.createBank)
router.use('/api', bank.deleteBank)
router.use('/api', bank.editBank)
router.use('/api', bank.getBank)
router.use('/api', bank.getBanks)
router.use('/api', bank.getTimeline)

// transfer routes

// income routes
router.use('/api', income.createIncome)
router.use('/api', income.deleteIncome)
router.use('/api', income.editIncome)
router.use('/api', income.getIncome)
router.use('/api', income.getIncomes)

// expense routes
router.use('/api', expenses.createExpense)
router.use('/api', expenses.deleteExpense)
router.use('/api', expenses.editExpense)
router.use('/api', expenses.getExpense)
router.use('/api', expenses.getExpenses)

// loan routes
router.use('/api', loans.createLoan)
router.use('/api', loans.deleteLoan)
router.use('/api', loans.editLoan)
router.use('/api', loans.getLoan)
router.use('/api', loans.getLoans)

// credit card routes
router.use('/api', creditCards.createCreditCard)
router.use('/api', creditCards.deleteCreditCard)
router.use('/api', creditCards.editCreditCard)
router.use('/api', creditCards.getCreditCard)
router.use('/api', creditCards.getCreditCards)

// asset routes
router.use('/api', assets.createAsset)
router.use('/api', assets.deleteAsset)
router.use('/api', assets.editAsset)
router.use('/api', assets.getAsset)
router.use('/api', assets.getAssets)

// isa routes
router.use('/api', isa.createIsa)
router.use('/api', isa.editIsa)
router.use('/api', isa.deleteIsa)
router.use('/api', isa.getIsa)
router.use('/api', isa.getIsas)

// affiliate routes
router.use('/api', affiliate.createAffiliate)
router.use('/api', affiliate.editAffiliate)
router.use('/api', affiliate.deleteAffiliate)
router.use('/api', affiliate.getAffiliate)
router.use('/api', affiliate.getAffiliates)

export = router
