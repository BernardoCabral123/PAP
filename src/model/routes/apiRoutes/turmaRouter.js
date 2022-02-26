const srcLocation = require("../../../srcLocation");
const express = require("express");
const router = express.Router();

const dbConnection = require("../../dbConnection");

router.get(`/`,(req,res)=>{
    dbConnection.query("SELECT * FROM turma;",(err,result)=>{
        if(err){
            console.log("falha na execucao do query")
        }
        else{
            res.json(result);
        }
    })
});

router.post(`/`,(req,res)=>{
    let newTurma = req.body;

    dbConnection.query(`CALL criarTurma('${newTurma.cursoId}',${newTurma.ano},'${newTurma.numeroTurma}')`,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("deu certo\n");
        }
  });
});

module.exports = router;