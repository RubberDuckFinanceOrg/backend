import user from '../users/index'
import profile from '../profiles/index';
import bank from '../banks/index';
import income from '../income/index';
import expenses from '../expenses/index';
import loans from '../loans/index'
import creditCards from '../credit_cards/index';
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


export = router
