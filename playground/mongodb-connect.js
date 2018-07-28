//const MongoClient=require('mongodb').MongoClient;
//Object destructuring using js
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return   console.log("Unable to connect to mongoDB server");
    }
    console.log("connected to MongoDB server");
    db.collection('Todos').insertOne({
    text:"to do something",
    completed:false
    },(err,result)=>{
if(err){
    return console.log("unable to insert to todo",err);
}
console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    });
    db.close();
});
