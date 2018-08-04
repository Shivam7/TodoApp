const {mongoose}=require('../server/db/mongoose');
const {Todo}=require('../models/todo');
const {ObjectID}=require('mongodb');

 //Todo.remove({})==> remove all
//Todo.findOneAndRemove
//Todo.findOneAndRemove
  Todo.findByIdAndRemove('5b5cad67028bba400b78c963').then((todo)=>{
console.log(todo);
  });