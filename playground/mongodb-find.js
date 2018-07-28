const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return   console.log("Unable to connect to mongoDB server");
    }
    console.log("connected to MongoDB server");
    //find return cursor only we need to change it to array
  //5b5c7451f6679f04dc17932e"
    // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    //as _id is object we need to get it using constructor function
    // db.collection('Todos').find({_id:new ObjectID('5b5c7451f6679f04dc17932e')}).toArray().then((docs)=>{

   /* db.collection('Todos').find({_id:new ObjectID('5b5c7451f6679f04dc17932e')}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
    },(err)=>{
        console.log("Error occured while retrieving data",err);
    });*/

    db.collection('Todos').find().count().then((count)=>{
        console.log( `Todos Count ${count}`);
        },(err)=>{
            console.log("Error occured while retrieving data",err);
        });
   
    //db.close();
});
