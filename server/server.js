var express=require('express');
var bodyParser=require('body-parser');


var {mongoose}=require('./db/mongoose');
var {Todo}=require('../models/todo');
var {User}=require('../models/user');
var app=express();
app.use(bodyParser.json())
app.post('/todos',(req,res)=>{
   console.log("Post request "+req.body); 

   var todo=new Todo({
       text:req.body.text
   });
   todo.save().then((doc)=>{
       res.send(doc);

   },(e)=>{
       res.status(400).send(e);
   })
});


app.listen(3000,()=>{
    console.log('Started on port 3000');
});















/*var newTodo=new todo(
    {
    text:'Cook dinner'
   });

   newTodo.save().then((doc)=>{
       console.log('Saved todo', doc);


   },(e)=>{
       console.log("Unable to save todo");
   });*/

   
/*var otherTodo=new todo(
    {
    text:'Study Smart',
    completedAt:123
   });

   otherTodo.save().then((doc)=>{
       console.log('Saved todo', JSON.stringify(doc, undefined, 2));


   },(e)=>{
       console.log("Unable to save todo",e);
   });


   var user=new user({
       email:'shivam15009@gmail.com'
   });

   user.save().then((doc)=>{
       console.log(doc);
   },(e)=>{
       console.log("unable to lof", e)
   });
   */