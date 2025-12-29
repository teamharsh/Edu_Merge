import express from 'express';
import { connect } from './config/db';
import userRoutes from './routes/userRoutes';
import bodyParser from 'body-parser';

const app = express();
const port = 3125;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', userRoutes);


app.listen(port, async() => {
  console.log(`Server is running on http://localhost:${port}`);
  await connect();
});
