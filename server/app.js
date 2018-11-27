import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

// configure middlewares
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
