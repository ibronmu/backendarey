import express from 'express';
import bodyParser, { json } from 'body-parser';
import {v4 as uuidv4} from 'uuid';
import { body, validationResult } from 'express-validator';
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.send(json({message:"Hello, World"}))
   
})
let items = [
    
];

const validateItem = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage('Description must not exceed 200 characters'),
];

app.get('/items',(req,res)=>{
res.send(items)
})
app.post('/items',(req,res)=>{

res.send('requsted')
 
const item = req.body; 
items.push({...item, id:uuidv4()})

});

app.get('/items/:id',(req, res)=>{
    const { id } = req.params;
    const item = items.find((item)=> item.id === id)
    res.send(item)
    
})
app.delete('/items/:id',(req,res)=>{
  const {id} = req.params;
  items = items.filter(item=> item.id !== id )
  res.send('deleted')
})
app.patch('/items/:id',(req,res)=>{

const   {id} = req.params;
 const item = items.find((item)=> item.id === id

 )
const {name,description} = req.body;
if(description){
item.description = description;
}

if(name)
item.name = name;
res.send('item updated')
})

app.put('/items/:id',(req,res)=>{
  const {id} = req.params;
  const item = items.find((item)=> item.id === id)

const {name, description} = req.body;
 
item.name = name;
item.description = description;

})




app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

app.listen(PORT,()=>{
    console.log('yay')
})