const srcLocation = require("../../../srcLocation");
const express = require("express");
const router = express.Router();

const dbConnection = require("../../dbConnection");

router.get(`/ilhas`,(req,res)=>{
    dbConnection.query("SELECT * FROM ilha;",(err,result)=>{
        if(err){
            console.log("falha na execucao do query")
        }
        else{
            res.json(result);
        }
    })
});

router.get(`/concelhos`,(req,res)=>{
    dbConnection.query("SELECT * FROM concelho;",(err,result)=>{
        if(err){
            console.log("falha na execucao do query")
        }
        else{
            res.json(result);
        }
    })
});

router.get('/concelhos/:id', function(req, res) {
    dbConnection.query(`SELECT * FROM concelho WHERE idIlha = ${req.params.id};`,(err,result)=>{
        if(err){
            console.log("falha na execucao do query")
        }
        else{
            res.json(result);
        } 
  });
});



module.exports = router;