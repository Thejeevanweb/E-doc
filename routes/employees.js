var express = require("express");

var bodyparser = require("body-parser");
const { json } = require("body-parser");
const Employees = require("../models/Employees");
var jsonparser = bodyparser.json();
const router = express.Router();


router.post("/save",async(req,res)=>{
    let body = req.body;
    let employees = new Employees();
    if(body.data.id != ""){
    employees = await Employees.findById(body.data.id);
    }
    employees.name= body.data.name;
    employees.gender= body.data.gender;
    employees.birthdate= body.data.birthdate;
    employees.address= body.data.address;
    employees.email= body.data.email;
    employees.mobileno= body.data.mobileno;
    employees.joiningdate= body.data.joiningdate;
    employees.departmentname= body.data.departmentname;
    employees.relievingdate= body.data.relievingdate;
    employees.photocode= body.data.photocode;
    employees.save().then(result=>{
        res.end(JSON.stringify(result));
    },err=>{
        res.end(JSON.stringify(err));
    });
});
router.post("/list",async(req,res)=>{
    let employeess = await Employees.find();
    res.json({data:employeess});
});
router.post("/get",async(req,res)=>{
    let body = req.body;
    let employeess = await Employees.findById(body.data.id);
    res.json({data:employeess});
});
router.post("/delete",async(req,res)=>{
    let body = req.body;
    await Employees.findByIdAndDelete(body.data.id);
    let data = {
        "data":
        {
            "status":"success"
        }
    }
    res.end(JSON.stringify(data));
});
module.exports = router;