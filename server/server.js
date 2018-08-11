//author shivam
const _=require('lodash');
const express=require('express');
const bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');


var {mongoose}=require('./db/mongoose');
var {Todo}=require('../models/todo');
var {User}=require('../models/User');
var app=express();
//express.Router
const port=process.env.PORT||3000;
//mongodb://shivam sharma:@fiqjxn87@ds111059.mlab.com:11059/shivam
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

  // remove by id

  app.delete('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();   
    }
    Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});

    }).catch((e)=>{
        res.status(400).send();
    })
  });

//app.patch to update a record
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
  
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
  
    if (_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
    } else {
      body.completed = false;
      body.completedAt = null;
    }
  
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
  
      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    })
  });

  //Save user info
app.post('/users',(req,res)=>{
    var body=_.pick(req.body,['email','password']);
    var user =new User(body);
    
    user.save().then(()=>{
      return  user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth',token).send(user);

    }).catch((e)=>{
        res.status(400).send(e);
    })
});
app.listen(port,()=>{
    console.log(`Started up at port  ${port}`);
});

module.exports={app};
