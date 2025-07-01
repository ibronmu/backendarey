import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.get('/',(req,res)=>{
  res.send("Hello, World")
   
})
app.use(userRoutes);

app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

app.listen(PORT,()=>{
    console.log('yay')
})