var  mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://shivam sharma:@fiqjxn87@ds111059.mlab.com:11059/shivam'||  'mongodb://localhost:27017/TodoApp');
 
module.exports={
    mongoose
};