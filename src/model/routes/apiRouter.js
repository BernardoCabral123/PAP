const express = require("express");
const router = express.Router();
const userAuthentication = require("../userAuthentication");


router.use("/unrestricted", require("./apiRoutes/unrestrictedRouter"));

router.use("/alunos",userAuthentication.checkAuthFormando, require("./apiRoutes/alunoRouter"));

router.use("/admins", userAuthentication.checkAuthAdmin, require("./apiRoutes/adminRouter"));

router.use("/diretorTurma", userAuthentication.checkAuthDiretorTurma, require("./apiRoutes/diretorTurmaRouter"));


module.exports = router;