const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const schema= new Schema(
    {
 
        
        title:{type:String},
        malecontent:{type:String},
        femalecontent:{type:String},
       
        
}) ;

const Documents= mongoose.model("documents",schema);
module.exports = Documents;