import { NextFunction, Request, Response } from 'express';

const requireLogin = (req: Request, res: Response, next: NextFunction) => {
  if(!req.session!.passport.user) {
    return res.status(401).send({ error: 'Please Login'});
  }
  next();
};

export { requireLogin };