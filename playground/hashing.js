/* const {SHA256}=require('crypto-js');
var message='I am user number 3'
var   hash=SHA256(message).toString();
console.log(`Message: ${message}`);
console.log(`Hash:${hash}`);

var data={
    id:4
};
var token={
    data,
    hash:SHA256(JSON.stringify(data+'somesecret')).toString()
}
var resultHash=SHA256(JSON.stringify(token.data)+'somesecret').toString();
if(hash===resultHash){
    console.log("Data was not manipualate");
}
else{
    console.log("data changed");
}
*/

const jwt=require('jsonwebtoken');

var data={
    id:10
};
var token=jwt.sign(data,'123abc');
console.log(token);

var decoded=jwt.verify(token,'123abc');
console.log((decoded));