const express = require("express");
const router = express.Router();

const dbConnection = require("../../dbConnection");


router.use("/alunos", require("./alunoRouter"));

router.use("/admins", require("./adminRouter"));

router.use("/turmas", require("./turmaRouter"));

router.use("/cursos", require("./cursoRouter"));

router.use("/empresas", require("./empresaRouter"));

router.use("/localizacao", require("./localizacaoRouter"));

router.get("/conta/existe/:email",(req,res)=>{
    dbConnection.query(`SELECT COUNT(conta.idConta) AS existe FROM conta WHERE email = '${req.params.email}'`,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(result[0]);
        }
    })
})

module.exports = router;