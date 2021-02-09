import user from '../users/index'
import profile from '../profiles/index';
import bank from '../banks/index';
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


export = router
