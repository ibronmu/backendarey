import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
import { body, validationResult } from 'express-validator';
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use(userRoutes);

app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

app.listen(PORT,()=>{
    console.log('yay')
})