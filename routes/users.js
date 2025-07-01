import express from 'express';
import {v4 as uuidv4} from 'uuid';
import { body, validationResult } from 'express-validator';
const router = express.Router();

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
router.get('/',(req,res)=>{
  res.send("Hello, World")
   console.log('started the server')
})
router.get('/items',(req,res)=>{
res.send(items)
})
router.post('/items',(req,res)=>{

res.send('requsted')
 
const item = req.body; 
items.push({...item, id:uuidv4()})

});

router.get('/items/:id',(req, res)=>{
    const { id } = req.params;
    const item = items.find((item)=> item.id === id)
    res.send(item)
    
})
router.delete('/items/:id',(req,res)=>{
  const {id} = req.params;
  items = items.filter(item=> item.id !== id )
  res.send('deleted')
})
router.patch('/items/:id',(req,res)=>{

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

router.put('/items/:id',(req,res)=>{
  const {id} = req.params;
  const item = items.find((item)=> item.id === id)

const {name, description} = req.body;
 
item.name = name;
item.description = description;

})



export default router;