const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const schema= new Schema(
    {
 
        
        name:{type:String},
        email:{type:String},
        password:{type:String},
        authkey:{type:String}
        
}) ;


const Authentication= mongoose.model("admins",schema);
module.exports = Authentication;