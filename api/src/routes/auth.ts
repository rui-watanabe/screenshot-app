import express from 'express';
import { passport } from '../services/passport-service';

const router = express.Router();

router.get('api/login', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('api/login/callback', passport.authenticate('google', (req, res) => {
  res.redirect('/');
}));

router.get('api/login/logout', passport.authenticate('google', (req, res) => {
  req.logout();
  res.redirect('/');
}));

router.get('api/me', (req, res) => {
  res.send(req.user);
});

export { router as authRouter };