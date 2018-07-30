const {mongoose}=require('../server/db/mongoose');
const {Todo}=require('../models/todo');
const {ObjectID}=require('mongodb');

 var id='5b5cad67028bba400b78c9631';

 if(! ObjectID.isValid(id)){
     console.log("id not valid");
 }
 
 /*Todo.find({
     _id:id
 }).then((todos)=>{
     console.log("todos",todos);
 })

 Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log("todos",todo);
}) */

Todo.findById(id).then((todo)=>{
    if(!todo){
        console.log("Id not found");
    }
console.log("Todo requested is", todo);
}).catch((e)=>console.log(e));