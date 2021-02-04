import user from '../users/index'
import profile from '../profiles/index';
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


export = router
