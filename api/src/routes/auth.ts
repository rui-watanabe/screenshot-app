import express, { Request, Response } from 'express';
import { passport } from '../services/passport-service';

const router = express.Router();

router.get('api/login', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('api/login/callback', passport.authenticate('google', (req: Request, res: Response) => {
  res.redirect('/');
}));

router.get('api/login/logout', passport.authenticate('google', (req: Request, res: Response) => {
  req.logout();
  res.redirect('/');
}));

router.get('api/me', (req: Request, res: Response) => {
  res.send(req.user);
});

export { router as authRouter };