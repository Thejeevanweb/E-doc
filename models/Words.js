const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const schema= new Schema(
    {
 
        
        keywords:{type:String},
        replace:{type:String}
        
       
        
}) ;
const Words= mongoose.model("words",schema);
module.exports = Words;
