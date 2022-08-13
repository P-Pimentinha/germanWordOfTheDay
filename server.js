import express from 'express';
const app = express();
import helmet from 'helmet';
import compression from 'compression';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';

//routers
import wordRouter from './routes/wordsRoutes.js';

//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(express.static('public'));
/* app.use(express.static(path.join(__dirname, '/public/css'))); */

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.json());
app.use(helmet());
app.use(compression());

/* app.use('/api/v1/words', wordRouter); */

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening in port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
