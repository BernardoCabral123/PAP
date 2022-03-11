const srcLocation = require("../../../srcLocation");
const express = require("express");
const router = express.Router();

const dbConnection = require("../../dbConnection");


// CRUD cursos
router.get(`/cursos`,(req,res)=>{
    dbConnection.query("SELECT * FROM vistaCurso ORDER BY sigla;",(err,result)=>{
        if(err){
            res.status(422).send("Erro na recolha de cursos");
        }
        else{
            res.status(200).json(result);
        }
    })
});

router.post(`/cursos`,(req,res)=>{
    dbConnection.query("INSERT INTO curso (idArea, nome, sigla, duracao) VALUES (?, ?, ?, ?)",
            [req.body.idArea, req.body.nome, req.body.sigla, req.body.duracao],
            (err,result)=>{
                if(err){
                    console.log(err);
                    res.status(422).send("Erro na introdução de curso");
                }
                else{                        
                    res.status(200).send("Curso criado com sucesso")
                    };
})});

router.put(`/cursos`,(req,res)=>{
    dbConnection.query("UPDATE curso SET idArea = ?, nome = ?, sigla = ?, duracao = ? WHERE idCurso = ?",
            [req.body.idArea, req.body.nome, req.body.sigla, req.body.duracao, req.body.idCurso],
            (err,result)=>{
                if(err){
                    console.log(err);
                    res.status(422).send("Erro na atualização de curso");
                }
                else{                        
                    res.status(200).send("Curso atualizado com sucesso")
                    };
})});

router.delete(`/cursos`,(req,res)=>{
    dbConnection.query("DELETE FROM curso WHERE idCurso = ?",
            [req.body.idCurso],
            (err,result)=>{
                if(err){
                    console.log(err);
                    res.status(422).send("Erro na eliminação de curso");
                }
                else{                        
                    res.status(200).send("Curso eliminado com sucesso")
                    };
})});

// CRUD turmas
router.get(`/turmas`,(req,res)=>{
    dbConnection.query("SELECT * FROM vistaTurma ORDER BY turma",(err,result)=>{
        if(err){
            console.log(err);
            res.status(422).send("Erro na recolha de turmas");
        }
        else{
            res.json(result);
        }
    })
});

router.post(`/turmas`,(req,res)=>{
    dbConnection.query("INSERT INTO turma (idCurso, numero, ano) VALUES (?, ?, ?)",
            [req.body.idCurso, req.body.numero, req.body.ano],
            (err,result)=>{
                if(err){
                    console.log(err);
                    res.status(422).send("Erro na criação da turma");
                }
                else{                        
                    res.status(200).send("Turma criado com sucesso")
                    };
})});


router.put(`/turmas`,(req,res)=>{
            
    dbConnection.query("UPDATE turma SET idCurso = ?, numero = ?, ano = ? WHERE (`idTurma` = ?)",
    [req.body.idCurso,req.numero,req.body.ano,req.body.idTurma],
    (err,resultt)=>{
        if(err){
            console.log(err);
                res.status(422).send("Erro na atualização da turma");
        }
        else{
            dbConnection.query("CALL `pap-plataformaestagios`.LimparDiretorTurma(?);",
            [req.body.idTurma],
            (err,result)=>{
                if(err){
                    console.log(err);
                    res.status(422).send("Erro na atualização da turma");
                }
                else{
                    if(req.body.idConta){    
                    dbConnection.query("INSERT INTO `pap-plataformaestagios`.`turma_conta` (`idTurma`, `idConta`) VALUES (?,?)",
                    [req.body.idTurma,req.body.idConta],
                    (err,result)=>{
                        if(err){
                            console.log(err);
                                res.status(422).send("Erro na atualização da turma");
                        }
                        else{
                        res.status(200).send("Turma atualizada com sucesso")
                        }
                    });}
                    else res.status(200).send("Turma atualizada com sucesso")                  
                };
            });
        }
    });
});

router.delete(`/turmas`,(req,res)=>{
    dbConnection.query("CALL `pap-plataformaestagios`.deleteTurma(?);",
            [req.body.idTurma],
            (err,result)=>{
                if(err){
                    console.log(err);
                    res.status(422).send("Erro na eliminação da turma");
                }
                else{                        
                    res.status(200).send("Turma eliminada com sucesso")
                    };
})});



// CRUD Formandos
router.get(`/formandos`,(req,res)=>{
    dbConnection.query("SELECT * FROM vistaFormando ORDER BY turma;",(err,result)=>{
        if(err){
            console.log(err);
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
            console.log(err);
            console.log("falha na execucao do query")
        }
        else{
            res.json(result);
        }
    })
});

module.exports = router;