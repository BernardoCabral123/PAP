const connection = require('./dbconnection')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.getTipoConta = (req,res) => {
    if(!req.headers.authorization) res.status(406).json({
        "msg":"Não autorizado"
    })
    try {
        connection.query(
            'SELECT * FROM conta WHERE publicKey = ?',
            [jwt.decode(req.headers.authorization).pk],
            (error,result) => {
                if (error) throw error;
                if(!result) res.status(401).json({
                   "msg":'Utlizador não encontrado'
                });

                jwt.verify(req.headers.authorization,result[0].privateKey, (error)=>{
                    if(error) res.status(401).json({
                        "msg":"Token inválido"
                    });
                    else{
                        res.status(200).json({
                            "msg":"Sessao valida",
                            "tipoConta": result[0].tipoConta});
                    }

                })
            }
        )
    }
    catch(error){
        res.json({msg:'Ocorreu um erro'})
    }
}

exports.login = (req,res) => {
    try {
        connection.query(
            'SELECT * FROM conta WHERE email = ?',
            [req.body.email],
            (err,result)=>{
                if(err) throw err
                
                if(!result[0] || !bcrypt.compareSync(req.body.password, result[0].password)){
                    res.status(406).json({
                        msg:'Email ou password incorreta'
                    })
                }
                else {
                    let payload = {
                        pk : result[0].publicKey
                    } 
                    let options = {
                        expiresIn: 3600,
                        issuer: 'Plataforma Estágios'
                    }
                    let token = jwt.sign(payload, result[0].privateKey,options)

                    
                    res.header('Authorization',token).json({
                        msg:"logado com sucesso"
                    })
                }
                
            }
        )
    }
    catch(err){
        res.json({
            msg:'erro...'
        })
    }
    
}

exports.checkAuth = (req, res, callback) => {

    if(!req.headers.authorization) res.status(406).json({msg:"Não autorizado"})
    try {
        connection.query(
            'SELECT * FROM conta WHERE publicKey = ?',
            [jwt.decode(req.headers.authorization).pk],
            (error,result) => {
                if (error) throw error;
                if(!result) res.status(401).json({msg:'Utlizador não encontrado'});

                jwt.verify(req.headers.authorization,result[0].privateKey, (error)=>{
                    if(error) res.status(401).json('Token inválido');
                    req.user = result[0];
                    return callback();
                })
            }
        )
    }
    catch(error){
        res.json({msg:'Ocorreu um erro'})
    }
}

exports.checkAuthAdmin = (req, res, callback) => {

    if(!req.headers.authorization) res.status(406).json({msg:"Não autorizado"})
    try {
        connection.query(
            'SELECT * FROM conta WHERE publicKey = ?',
            [jwt.decode(req.headers.authorization).pk],
            (error,result) => {
                if (error) throw error;
                if(!result) res.status(401).json({msg:'Utlizador não encontrado'});

                jwt.verify(req.headers.authorization,result[0].privateKey, (error)=>{
                    if(error) res.status(401).json('Token inválido');
                        if(result[0].tipoConta == 'admin'){
                            req.user = result[0];
                            return callback();
                        }
                        res.status(406).json({msg:"Não autorizado"})
                })
            }
        )
    }
    catch(error){
        res.json({msg:'Ocorreu um erro'})
    }
}

exports.checkAuthDiretorTurma = (req, res, callback) => {

    if(!req.headers.authorization) res.status(406).json({msg:"Não autorizado"})
    try {
        connection.query(
            'SELECT * FROM conta WHERE publicKey = ?',
            [jwt.decode(req.headers.authorization).pk],
            (error,result) => {
                if (error) throw error;
                if(!result) res.status(401).json({msg:'Utlizador não encontrado'});

                jwt.verify(req.headers.authorization,result[0].privateKey, (error)=>{
                    if(error) res.status(401).json('Token inválido');
                        if(result[0].tipoConta == 'diretor de turma'){
                            req.user = result[0];
                            return callback();
                        }
                        res.status(406).json({msg:"Não autorizado"})
                })
            }
        )
    }
    catch(error){
        res.json({msg:'Ocorreu um erro'})
    }
}

exports.checkAuthFormando = (req, res, callback) => {

    if(!req.headers.authorization) res.status(406).json({msg:"Não autorizado"})
    try {
        connection.query(
            'SELECT * FROM conta WHERE publicKey = ?',
            [jwt.decode(req.headers.authorization).pk],
            (error,result) => {
                if (error) throw error;
                if(!result) res.status(401).json({msg:'Utlizador não encontrado'});

                jwt.verify(req.headers.authorization,result[0].privateKey, (error)=>{
                    if(error) res.status(401).json('Token inválido');
                        if(result[0].tipoConta == 'formando'){
                            req.user = result[0];
                            return callback();
                        }
                        res.status(406).json({msg:"Não autorizado"})
                })
            }
        )
    }
    catch(error){
        res.json({msg:'Ocorreu um erro'})
    }
}

exports.checkAuthEmpresa = (req, res, callback) => {

    if(!req.headers.authorization) res.status(406).json({msg:"Não autorizado"})
    try {
        connection.query(
            'SELECT * FROM conta WHERE publicKey = ?',
            [jwt.decode(req.headers.authorization).pk],
            (error,result) => {
                if (error) throw error;
                if(!result) res.status(401).json({msg:'Utlizador não encontrado'});

                jwt.verify(req.headers.authorization,result[0].privateKey, (error)=>{
                    if(error) res.status(401).json('Token inválido');
                        if(result[0].tipoConta == 'empresa'){
                            req.user = result[0];
                            return callback();
                        }
                        res.status(406).json({msg:"Não autorizado"})
                })
            }
        )
    }
    catch(error){
        res.json({msg:'Ocorreu um erro'})
    }
}