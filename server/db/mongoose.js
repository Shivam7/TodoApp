var  mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://shivam:abc123@ds111059.mlab.com:11059/shivam');
//mongoose.connect('mongodb://localhost:27017/TodoApp');

//mongodb://<dbuser>:<dbpassword>@ds111059.mlab.com:11059/shivam
//|| 'mongodb://localhost:27017/TodoApp'
module.exports={
    mongoose
};