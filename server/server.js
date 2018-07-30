var express=require('express');
var bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');


var {mongoose}=require('./db/mongoose');
var {Todo}=require('../models/todo');
var {User}=require('../models/user');
var app=express();
const port=process.env.PORT||3000;

app.use(bodyParser.json())

//post request
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

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
      res.send({todos});
    }, (e) => {
      res.status(400).send(e);
    });
  });

  //Get/todos/1223233 :id id variable 
  app.get('/todos/:id',(req,res)=>{
      //req.params retreive the id provided
     var id=req.params.id;
     if(!ObjectID.isValid(id)){
    return res.status(404).send();
     }
     Todo.findById(id).then((todo)=>{
         if(!todo){
             return  res.status(404).send();
         }
         res.send({todo});

     }).catch((e)=>{
        res.status(404).send();
     })
  });



app.listen(3000,()=>{
    console.log(`Started up at port  ${port}`);
});



module.exports={app};











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
