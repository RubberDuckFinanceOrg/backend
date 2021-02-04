import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
import { User } from '../users/types'
const jwtSecret = process.env.SECRET;


function generateToken(user: User) {
  const payload = {
    userId: user.id,
    userEmail: user.email
  };

  const options = {
    expiresIn: '8h'
  };

  if (jwtSecret) {
    return jwt.sign(payload, jwtSecret, options);
  }
}

export = generateToken;
