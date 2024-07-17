import express from 'express';
import 'dotenv/config';
import AppRoute from './routes/AppRoute.js';
//import dotenv from 'dotenv';
//dotenv.config();

const app = express();

app.use(express.json());

app.use(AppRoute);

const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
});