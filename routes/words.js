var express = require("express");
var bodyparser = require("body-parser");

const { json } = require("body-parser");
const Words = require("../models/Words");
var jsonparser = bodyparser.json();
const router = express.Router();

router.post("/save", async (req, res) => {

    let body = req.body;
    let words = new Words();

    if (body.data.id != "") {
        words = await Words.findById(body.data.id);
    }
   words.keyword=body.data.keyword;
   words.replacewith=body.data.replacewith;

    words.save().then(result => {
        res.end(JSON.stringify(result));

    }, err => {
        res.end(JSON.stringify(err));
    });

})

router.post("/list",async(req,res)=>{
    let words= await Words.find();
    res.json({data:words});
})

router.post("/get",async(req,res)=>{
    let body=req.body;
    let words= await Words.findById(body.data.id);
    res.json({data:words});
})

router.post("/delete",async(req,res)=>{
    let body= req.body;
    await Words.findByIdAndDelete(body.data.id);
    let data ={
        "data":{
            "status":"success"
        }
        
    }
    res.end(JSON.stringify(data));
})
module.exports=router;



