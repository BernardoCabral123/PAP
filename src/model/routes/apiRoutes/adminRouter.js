const srcLocation = require("../../../srcLocation");
const express = require("express");
const router = express.Router();

const dbConnection = require("../../dbConnection");

router.get(`/cursos`,(req,res)=>{
    dbConnection.query("SELECT * FROM vistaCurso ORDER BY idCurso;",(err,result)=>{
        if(err){
            console.log("falha na execucao do query")
        }
        else{
            res.json(result);
        }
    })
});

router.put(`/cursos`,(req,res)=>{
    dbConnection.query("UPDATE pap-plataformaestagios.curso` SET idArea = ?, nome = ?, sigla ?, `duracao` = ? WHERE idCurso` = ?",
            [req.body.idArea, req.body.nome, req.body.sigla. req.body.duracao, req.body.idCurso],
            (err,result)=>{
                if(err){
                    console.log(err);
                    res.status(422).send("Erro na introdução");
                }
                else{                        
                    res.status(200).send("Conta criada com sucesso")
                    };
})});

router.get(`/turmas`,(req,res)=>{
    dbConnection.query("SELECT * FROM vistaTurma ORDER BY idCurso,turma;",(err,result)=>{
        if(err){
            console.log("falha na execucao do query")
        }
        else{
            res.json(result);
        }
    })
});

router.get(`/formandos`,(req,res)=>{
    dbConnection.query("SELECT * FROM vistaFormando ORDER BY idCurso,turma;",(err,result)=>{
        if(err){
            console.log("falha na execucao do query")
        }
        else{
            res.json(result);
        }
    })
});

router.get(`/formandos/:idTurma`,(req,res)=>{
    dbConnection.query("SELECT * FROM vistaFormando WHERE idTurma = ?;",[req.params.idTurma],(err,result)=>{
        if(err){
            console.log("falha na execucao do query")
        }
        else{
            res.json(result);
        }
    })
});

module.exports = router;