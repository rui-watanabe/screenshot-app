import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { passport } from './services/passport-service';
import { indexRouter } from './routes';
import { authRouter } from './routes/auth';

const app = express();

app.use(cookieSession({ maxAge: 30 * 23 * 60 * 60 * 1000, keys: [ process.env.COOKIE_KEY! ] }));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json({ type: '*/*' }));

app.use(indexRouter);
app.use(authRouter);

app.get('*', (req: Request, res: Response) => {
  res.status(400).send({ errors: [{ message: 'Page not found'}]})
});

export { app };