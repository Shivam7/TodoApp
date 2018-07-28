const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return   console.log("Unable to connect to mongoDB server");
    }
    console.log("connected to MongoDB server");
    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id:new ObjectID('5b5c8f885c07c43a0581a6c3')
    },{
    //mongodb update operators
    $set:{
        completed:true
    }
    } ,{
        returnOriginal:false
    }).then((result)=>{
    console.log(result);
    })
   // db.close();
});
