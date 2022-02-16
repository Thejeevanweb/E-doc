var express=require("express");
var bodyparser =require("body-parser");
const { status } = require("express/lib/response");
const Authentication = require("../models/authentication");
var jsonparser = bodyparser.json();
const router = express.Router();


router.post("/login/",async(req,res)=>{
    let body = req.body;
    
    let admin= await Authentication.find().and([{email:body.data.email},{password:body.data.password}]);

let data = {
    "data":
    {
       "status":"failed"
    }
}
if(admin.length !=0)
{

    let authkey = (Math.random()+1).toString(36).substring(2);

    admin = await Authentication.findById(admin[0]._id);
    admin.authkey = authkey;
    admin.save();
    data = {
        "data":
        {
            "status":"success",
            "name":admin.name,
            "email":admin.email,
            "authkey":authkey
        }
    }
}


res.end(JSON.stringify(data));
});


module.exports = router;
