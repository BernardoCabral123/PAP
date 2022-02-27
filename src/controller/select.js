var autenticado = true;
var tipoUser = 'empresa';

function renderCode(id,codigo){
    document.getElementById(id).innerHTML = codigo;
}


async function renderContent1(){

    if(localStorage.getItem("token")){
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'authorization': localStorage.getItem("token")
            },
            body: JSON.stringify()
        }

        await fetch('http://localhost:3000/api/unrestricted/getAuth', options)
        .then((res) => {
            if(res.status===200){
                return res.json()
            }
            else{
                localStorage.removeItem(token);
                renderCode("navbar",`
                <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #3898ec;">
                    <div class="container-fluid">
                        <div class="ml-5"  onclick='location.reload();'>
                            <img class="d-inline-block align-text-top" src="http://localhost:3000/files/Assets/logoPlataformaPrincipal.png" alt="img-fluid" height="60px" width="auto" style="cursor: pointer;">
                        </div>
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse" style="justify-content: end !important;" id="navbarNav">
                            <ul class="navbar-nav" style="cursor: pointer;">
                                <li class="nav-item" onclick="location.reload();;">
                                    <a class="nav-link">Inicio</a>
                                </li>
                                <li class="nav-item" onclick="renderDuvidas();">
                                    <a class="nav-link" >Duvidas</a>
                                </li>
                                <li class="nav-item" onclick="renderLogin();">
                                    <a class="nav-link">login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                `)
                return null
            }
        })
        .then((res)=>{
            if(res){
            console.log(res);
            switch (res.tipoConta) {
                case 'admin':
                    
                    renderCode("navbar",`<nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #3898ec;">
                    <div class="container-fluid">
                        <div class="ml-5"  onclick='location.reload();'>
                            <img class="d-inline-block align-text-top" src="http://localhost:3000/files/Assets/logoPlataformaPrincipal.png" alt="img-fluid" height="60px" width="auto" style="cursor: pointer;">
                        </div>
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse" style="justify-content: end !important;" id="navbarNav">
                            <ul class="navbar-nav" style="cursor: pointer;">
                                <li class="nav-item" onclick="location.reload();">
                                    <a class="nav-link">Inicio</a>
                                </li>
                                <li class="nav-item" onclick="renderGerirRecursos();">
                                    <a class="nav-link">Gerir Recursos</a>
                                </li>
                                <li class="nav-item" onclick="logout();">
                                    <a class="nav-link">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                `)
                    break;
                 case 'diretor de turma':
                    renderCode("navbar",`<nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #3898ec;">
                    <div class="container-fluid">
                        <div class="ml-5"  onclick='location.reload();'>
                            <img class="d-inline-block align-text-top" src="http://localhost:3000/files/Assets/logoPlataformaPrincipal.png" alt="img-fluid" height="60px" width="auto" style="cursor: pointer;">
                        </div>
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse" style="justify-content: end !important;" id="navbarNav">
                            <ul class="navbar-nav" style="cursor: pointer;">
                                <li class="nav-item" onclick="location.reload();">
                                    <a class="nav-link">Inicio</a>
                                </li>
                                <li class="nav-item" onclick="renderGerirRecursos();">
                                    <a class="nav-link">Gerir Recursos</a>
                                </li>
                                <li class="nav-item" onclick="logout();">
                                    <a class="nav-link">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                `)
                    break;
                case 'formando':
                    renderCode("navbar",`<nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #3898ec;">
                    <div class="container-fluid">
                        <div class="ml-5"  onclick='location.reload();'>
                            <img class="d-inline-block align-text-top" src="http://localhost:3000/files/Assets/logoPlataformaPrincipal.png" alt="img-fluid" height="60px" width="auto" style="cursor: pointer;">
                        </div>
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse" style="justify-content: end !important;" id="navbarNav">
                            <ul class="navbar-nav" style="cursor: pointer;">
                                <li class="nav-item" onclick="location.reload();;">
                                    <a class="nav-link">Inicio</a>
                                </li>
                                <li class="nav-item" onclick="renderOfertas();">
                                    <a class="nav-link">Ofertas</a>
                                </li>
                                <li class="nav-item" onclick="renderDuvidas();">
                                    <a class="nav-link" >Duvidas</a>
                                </li>
                                <li class="nav-item" onclick="renderPerfilEmpresa();">
                                    <a class="nav-link" >Perfil</a>
                                </li>
                                <li class="nav-item" onclick="logout();">
                                    <a class="nav-link">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>`)
                    break;
                case 'empresa':
                    renderCode("navbar",`<nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #3898ec;">
                    <div class="container-fluid">
                        <div class="ml-5"  onclick='location.reload();'>
                            <img class="d-inline-block align-text-top" src="http://localhost:3000/files/Assets/logoPlataformaPrincipal.png" alt="img-fluid" height="60px" width="auto" style="cursor: pointer;">
                        </div>
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse" style="justify-content: end !important;" id="navbarNav">
                            <ul class="navbar-nav" style="cursor: pointer;">
                                <li class="nav-item" onclick="location.reload();;">
                                    <a class="nav-link">Inicio</a>
                                </li>
                                <li class="nav-item" onclick="renderMinhaArea();">
                                    <a class="nav-link">Minha Área</a>
                                </li>
                                <li class="nav-item" onclick="renderDuvidas();">
                                    <a class="nav-link" >Duvidas</a>
                                </li>
                                <li class="nav-item" onclick="renderPerfilEmpresa();">
                                    <a class="nav-link" >Perfil</a>
                                </li>
                                <li class="nav-item" onclick="logout();">
                                    <a class="nav-link">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>`)
                    break;
                
            }
        }else return;
    })
        .catch((error) => console.log(error));

    }else{
        renderCode("navbar",`<nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #3898ec;">
        <div class="container-fluid">
            <div class="ml-5"  onclick='location.reload();'>
                <img class="d-inline-block align-text-top" src="http://localhost:3000/files/Assets/logoPlataformaPrincipal.png" alt="img-fluid" height="60px" width="auto" style="cursor: pointer;">
            </div>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" style="justify-content: end !important;" id="navbarNav">
                <ul class="navbar-nav" style="cursor: pointer;">
                    <li class="nav-item" onclick="location.reload();;">
                        <a class="nav-link">Inicio</a>
                    </li>
                    <li class="nav-item" onclick="renderDuvidas();">
                        <a class="nav-link" >Duvidas</a>
                    </li>
                    <li class="nav-item" onclick="renderLogin();">
                        <a class="nav-link">login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `)
    }

}


//nao autenticado
function renderDuvidas(){
    renderCode("content",
`<div class="container text-center">
    <h1>Duvidas</h1>
</div>

<div class="container mt-5 shadow-lg p-3 mb-5 bg-body rounded">
    <div class="row">
        <div class="col-sm-6">
            <form class="row needs-validation" action="" novalidate>
                <div class="col-sm-12 mt-2">
                    <label for="nomeempresa" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome" maxlength="50" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div class="col-sm-12 mt-2">
                    <label for="nomeempresa" class="form-label">Email</label>
                    <input type="text" class="form-control" id="nome" maxlength="50" required>
                </div>

                <div class="col-sm-6 mt-2">
                    <label for="conselho" class="form-label">Tipo de duvida</label>
                    <select class="form-select" aria-label="Default select example" id="concelho" required>
                        <option selected>Tipo de duvida</option>
                        <option>Erros</option>
                        <option>bugs</option>
                    </select>
                </div>

                <div class="col-sm-12 mt-2">
                    <label for="descricao" class="form-label">Descrição da duvida</label>
                    <textarea class="form-control" id="descricao" style="border-radius: 15px;" rows="3"></textarea required>
                </div>
                
                <div class="col-12 mt-3">
                    <button class="btn btn-primary" type="btn">Submeter duvida</button>
                </div>
            </form>
        </div>

        <div class="col-sm-6">
            <img class="img-fluid" src="http://localhost:3000/files/Assets/duvidas.svg" alt="">
        </div>
    </div>
</div>`);
}
async function login(){
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        })
    }

    await fetch('http://localhost:3000/api/unrestricted/login', options)
    .then((res) => {
        if(res.status===406){
          alert(res.json().msg)
          return
        }       
        let token = res.headers.get("Authorization");
        localStorage.setItem("token", token);
      })
      .catch((error) => console.log(error));

      if(localStorage.getItem("token")) location.reload();
      
}

//todos
function logout(){
    localStorage.removeItem("token");
    location.reload()
}

//admin

//empresa
function renderPerfilEmpresa(){
    renderCode("content",
`<div class="container mt-2">
<div id="imgPerfil" class="shadow-lg p-1 mt-2 mx-auto d-block border">
    <img src="http://localhost:3000/files/Assets/profile.svg" class="img-thumbnail rounded rounded-circle mx-auto d-block border border-light" alt="..." style="height: 250px;">
    <button class="btn btn-primary" type="button"><i class="fas fa-camera"></i></button>
    <input type="file" class="form-control" id="fotoPerfil" aria-describedby="inputGroupFileAddon03" aria-label="Upload">
</div>

<div class="mt-3 shadow-lg p-3 mb-5 bg-body rounded">
    <div class="row">
        <div class="conteudo col-sm-12 mt-4">
            <div class="row">
                <div class="col-sm-6">
                    <h5>Nome da empresa</h5>
                    <p>Bensaúde</p>
                </div>

                <div class="col-sm-6">
                    <h5>Numero</h5>
                    <p>969999999</p>                            
                </div>
                        
                </div>
            </div>
        </div>
    </div>
</div>
</div>`);}
function renderMinhaArea(){
    renderCode("content",
`<div class="container mt-5 d-flex">
<h2>Ofertas Ativas</h2>
<button type="button" class="btn btn-primary mx-3 rounded" onclick='openModal("criacaoOferta");' >Criar Oferta</button>
</div>

<div class="container">
<div class="mt-5 shadow-lg p-3 mb-5 bg-body rounded" onmouseover="mostrarBotao('btn')" onmouseout="esconderBotao('btn')">
                <div class="row">
                    <div class="logo col-sm-3">
                        <div class="img">
                            <img src="http://localhost:3000/files/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                        </div>
                    </div>

                    <div class="col-sm-4 mt-2">
                        <div class="col">
                            <h5>MUSAMI</h5>
                        </div>

                        <div class="col mt-4">
                            <h5>Area</h5>
                            <p>Técnico de informática - Sistemas</p>
                        </div>

                        <div class="col mt-5">
                            <h5>Localização</h5>
                            <p>São pedro, Ponta Delgada, São Miguel</p>
                        </div>
                    </div>

                    <div class="col-sm-4 mt-2">
                        <div class="col">
                            <h5 class="card-title">Descrição do trabalho</h5>
                            <p class="card-text">Gestão de redes e equipamento informático da empresa</p> 
                        </div>
                    </div>

                    <div class="col-sm-1 d-flex align-items-center">
                        <div class="row">
                            <div>
                                <button type="button" class="btn btn-success mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </button>
                                <button type="button" class="btn btn-danger mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>

<div class="container">
<h2>Ofertas finalizadas</h2>

<div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
    <div class="row">
        <div class="logo col-sm-3">
            <div class="img">
                <img src="http://localhost:3000/files/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
            </div>
        </div>

        <div class="conteudo col-sm-9 mt-4">
            <div class="row">
                <div class="col-sm-6">
                    <h5>Curso</h5>
                    <p>Técnico de informática - Sistemas</p>
                </div>

                <div class="col-sm-6">
                    <h5>Área de integração</h5>
                    <p>Gestão de redes</p>                            
                </div>

                <div class="col-sm-6 mt-5">
                    <h5 class="card-title">Descrição do trabalho</h5>
                    <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                </div>

                <div class="col-sm-6 mt-5">
                    <h5>Localização</h5>
                    <p>São pedro, Ponta Delgada, São Miguel</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


<div class="modal fade" id="criacaoOferta" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-xl modal-dialog-scrollable">
    <div class="modal-content">
        <div class="modal-body">
        <div class="registo shadow-lg p-3 bg-body rounded">
            <div class="row">
                <div class="imgCriarAnuncio col-sm-6 mt-3">
                    <img class="img-fluid" src="http://localhost:3000/files/Assets/criarAnuncio.svg" alt="work">
                </div>

                <div class="formulario col-sm-6 align-self-center">
                    <form class="needs-validation" novalidate>
                        <div class="row">
                            <div class="col-sm-12 mt-2">
                                <label for="area" class="form-label">Area</label>
                                <select class="form-select" aria-label="Default select example" id="area" required>
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col-sm-12 mt-2">
                                <label for="descricao" class="form-label">Descrição do trabalho dos formandos</label>
                                <textarea class="form-control" id="descricao" style="border-radius: 15px;" rows="3" required></textarea>
                            </div>
                
                            <div class="col-sm-12 mt-2">
                                <label for="vagas" class="form-label">Numero de vagas</label>
                                <input type="text" class="form-control" id="vagas" style="border-radius: 15px;" required>
                            </div>
                
                            <div class="col-sm-6 mt-2">
                                <label for="ilha" class="form-label">Ilha</label>
                                <select class="form-select" aria-label="Default select example" id="ilha" required>
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                
                            <div class="col-sm-6 mt-2">
                                <label for="ilha" class="form-label">Concelho</label>
                                <select class="form-select" aria-label="Default select example" id="concelho" required>
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            
                            <center>
                                <div class="col-sm-12 mt-4">
                                    <button type="button" class="btn btn-primary col-sm-6" style="border-radius: 30px;">Criar Oferta</button>
                                </div>
                            </center>
                        </div>
                    </form>
                </div>
            </div>
        </div>                                              
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
        </div>
    </div>
</div>
</div>`);}



//metodos auxiliares
function openModal(id) {
    var myModal = new bootstrap.Modal(document.getElementById(id), {  keyboard: false });
    myModal.show();
  }

  function selecionar(){
    switch(document.getElementById("estado").value){
        case "alunos":
        
            document.getElementById("painelGestao").innerHTML =`<div class="mt-4">
                <div id="criacaoCurso"></div>
            
                <div class="container mb-4 shadow-lg p-3 bg-body rounded" onmouseover="mostrarBotao('btnCriarCurso','criacaoCurso')" onmouseout="esconderBotao('btnCriarCurso')">
                <div class="criar d-flex">
                    <div><h3>Cursos</h3></div>
                    <div id="btnCriarCurso" style="display: none;"><button type="button" class="btn btn-primary mx-3" style="border-radius: 30px;" onclick="abrirCriarCurso();">Abrir formulário</button></div>
                </div>
                    
                <div class="table-responsive-sm">
                    <table class="table text-center">
                        <thead>
                        <tr>
                        <th class="col-sm-4" scope="col">Nome</th>
                        <th class="col-sm-4" scope="col">Sigla</th>
                        <th class="col-sm-4" scope="col">Área</th>    
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Tecnico de informatica - Sistemas</td>
                            <td>TIS</td>
                            <td>informatica</td>    
                        </tr>
                        </tbody>
                    </table>
                    <div class="text-center"><label class="text-danger" id="msgCursos"></label></div>
                </div>
                </div>
                
                <div id="criacaoTurma"></div>
            
                <div class="container mb-4  shadow-lg p-3 bg-body rounded" onmouseover="mostrarBotao('btnCriarTurma','criacaoTurma')" onmouseout="esconderBotao('btnCriarTurma')">
                    <div class="criar d-flex align-items-center">
                    <h3>Turmas</h3>
                    <div id="btnCriarTurma" style="display: none;"><button type="button" class="btn btn-primary mx-3" style="border-radius: 30px;" onclick="abrirCriarTurma();">Abrir formulário</button></div>
                    
                    </div>
                    <div class="table-responsive-sm">
                    <table class="table text-center">
                        <thead >
                        <tr>
                        <th scope="col"><input class="form-check-input" type="radio" id="radioTodas" value=0 checked></th>
                        <th scope="col">Nome</th>
                        <th scope="col">Curso </th>
                        <th scope="col">Alunos</th>
                        <th scope="col">Alunos com estágio confirmado</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                    
                            <td scope="col" style="width: 5%;"><input class="form-check-input" type="radio" value=1></td>
                            <td>TIS 2º ano turma 1</td>
                            <td>Tecnico de informatica - Sistemas</td>
                            <td>10</td>    
                            <td>9</td>    
                        </tr>
            
                        
                        </tbody>
                    </table>
                    <div class="text-center"><label class="text-danger" id="msgTurmas"></label></div>
                    </div>
                </div>
                
                <div id="criacaoAluno"></div>
            
                <div class="container shadow-lg p-3 mb-5 bg-body rounded" onmouseover="mostrarBotao('btnCriarAluno','criacaoAluno')" onmouseout="esconderBotao('btnCriarAluno')">
                    <div class="criar d-flex align-items-center">
                    <h3>Alunos</h3>
                    <div id="btnCriarAluno" style="display: none;"> <button type="button" class="btn btn-primary mx-3" style="border-radius: 30px;" onclick="abrirCriarAluno();">Abrir formulário</button></div>
                    </div>
            
                    <div class="table-responsive-sm">
                    <table class="table text-center">
                        <thead >
                        <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Turma</th>
                        <th scope="col">Estado</th> 
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td>João Pinto</td>
                            <td>example@gmail.com</td>
                            <td>TIS 2º ano turma 1</td>
                            <td>Confirmado</th></td>
                        </tr>  
                        </tbody>
                    </table>
                    <div class="text-center"><label class="text-danger" id="msgAlunos"></label></div>
                    </div>
                </div>
            </div>
            `;
    
        break;
        case "empresa":

            document.getElementById("painelGestao").innerHTML = `<div class="container mt-3 shadow-lg p-3 mb-5 bg-body rounded">
            <div class="table-responsive-sm">
                <table class="table text-center">
                <thead>
                    <tr>
                    <th scope="col">Nome da empresa</th>
                    <th scope="col">Nome responsavel</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nº Anuncios</th>
                    <th scope="col">Anuncios</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Bem Saude</td>
                    <td>Duarte</td>
                    <td>Duarte.francico38@gmail.com</td>
                    <td>2</td>
                        <td>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver mais</button>
                            
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl modal-dialog-scrollable">
                                <div class="modal-content">
                                <div class="modal-body">
                                    <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                                    <div class="row">
                                        <div class="logo col-sm-3">
                                        <div class="img">
                                            <center><button type="button" class="btn btn-sm btn-outline-success mb-2">Manifestar interese</button></center>
                                            <img src="/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                                        </div>
                                        </div>
                    
                                        <div class="conteudo col-sm-9 mt-5">
                                        <div class="row">
                                            <div class="col-sm-6">
                                            <h5>Curso</h5>
                                            <p>Técnico de informática - Sistemas</p>
                                            </div>
                    
                                            <div class="col-sm-6">
                                            <h5>Área de integração</h5>
                                            <p>Gestão de redes</p>                            
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5 class="card-title">Descrição do trabalho</h5>
                                            <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5>Localização</h5>
                                            <p>São pedro, Ponta Delgada, São Miguel</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                                    <div class="row">
                                        <div class="logo col-sm-3">
                                        <div class="img">
                                            <center><button type="button" class="btn btn-sm btn-outline-success mb-2">Manifestar interese</button></center>
                                            <img src="/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                                        </div>
                                        </div>
                    
                                        <div class="conteudo col-sm-9 mt-5">
                                        <div class="row">
                                            <div class="col-sm-6">
                                            <h5>Curso</h5>
                                            <p>Técnico de informática - Sistemas</p>
                                            </div>
                    
                                            <div class="col-sm-6">
                                            <h5>Área de integração</h5>
                                            <p>Gestão de redes</p>                            
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5 class="card-title">Descrição do trabalho</h5>
                                            <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5>Localização</h5>
                                            <p>São pedro, Ponta Delgada, São Miguel</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                                    <div class="row">
                                        <div class="logo col-sm-3">
                                        <div class="img">
                                            <center><button type="button" class="btn btn-sm btn-outline-success mb-2">Manifestar interese</button></center>
                                            <img src="/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                                        </div>
                                        </div>
                    
                                        <div class="conteudo col-sm-9 mt-5">
                                        <div class="row">
                                            <div class="col-sm-6">
                                            <h5>Curso</h5>
                                            <p>Técnico de informática - Sistemas</p>
                                            </div>
                    
                                            <div class="col-sm-6">
                                            <h5>Área de integração</h5>
                                            <p>Gestão de redes</p>                            
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5 class="card-title">Descrição do trabalho</h5>
                                            <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5>Localização</h5>
                                            <p>São pedro, Ponta Delgada, São Miguel</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                                    <div class="row">
                                        <div class="logo col-sm-3">
                                        <div class="img">
                                            <center><button type="button" class="btn btn-sm btn-outline-success mb-2">Manifestar interese</button></center>
                                            <img src="/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                                        </div>
                                        </div>
                    
                                        <div class="conteudo col-sm-9 mt-5">
                                        <div class="row">
                                            <div class="col-sm-6">
                                            <h5>Curso</h5>
                                            <p>Técnico de informática - Sistemas</p>
                                            </div>
                    
                                            <div class="col-sm-6">
                                            <h5>Área de integração</h5>
                                            <p>Gestão de redes</p>                            
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5 class="card-title">Descrição do trabalho</h5>
                                            <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5>Localização</h5>
                                            <p>São pedro, Ponta Delgada, São Miguel</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                    <td>Bem Saude</td>
                    <td>Duarte</td>
                    <td>Duarte.francico38@gmail.com</td>
                    <td>2</td>
                    <td><button type="submit" class="btn btn-primary">Ver mais</button></div></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            `;

        break;
        case "adminsDiretores":

            document.getElementById("painelGestao").innerHTML = `<div class="container mt-3 shadow-lg p-3 mb-5 bg-body rounded">
            <div class="table-responsive-sm">
                <table class="table text-center">
                <thead>
                    <tr>
                    <th scope="col">Nome da empresa</th>
                    <th scope="col">Nome responsavel</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nº Anuncios</th>
                    <th scope="col">Anuncios</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Bem Saude</td>
                    <td>Duarte</td>
                    <td>Duarte.francico38@gmail.com</td>
                    <td>2</td>
                        <td>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver mais</button>
                            
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl modal-dialog-scrollable">
                                <div class="modal-content">
                                <div class="modal-body">
                                    <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                                    <div class="row">
                                        <div class="logo col-sm-3">
                                        <div class="img">
                                            <center><button type="button" class="btn btn-sm btn-outline-success mb-2">Manifestar interese</button></center>
                                            <img src="/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                                        </div>
                                        </div>
                    
                                        <div class="conteudo col-sm-9 mt-5">
                                        <div class="row">
                                            <div class="col-sm-6">
                                            <h5>Curso</h5>
                                            <p>Técnico de informática - Sistemas</p>
                                            </div>
                    
                                            <div class="col-sm-6">
                                            <h5>Área de integração</h5>
                                            <p>Gestão de redes</p>                            
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5 class="card-title">Descrição do trabalho</h5>
                                            <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5>Localização</h5>
                                            <p>São pedro, Ponta Delgada, São Miguel</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                                    <div class="row">
                                        <div class="logo col-sm-3">
                                        <div class="img">
                                            <center><button type="button" class="btn btn-sm btn-outline-success mb-2">Manifestar interese</button></center>
                                            <img src="/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                                        </div>
                                        </div>
                    
                                        <div class="conteudo col-sm-9 mt-5">
                                        <div class="row">
                                            <div class="col-sm-6">
                                            <h5>Curso</h5>
                                            <p>Técnico de informática - Sistemas</p>
                                            </div>
                    
                                            <div class="col-sm-6">
                                            <h5>Área de integração</h5>
                                            <p>Gestão de redes</p>                            
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5 class="card-title">Descrição do trabalho</h5>
                                            <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5>Localização</h5>
                                            <p>São pedro, Ponta Delgada, São Miguel</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                                    <div class="row">
                                        <div class="logo col-sm-3">
                                        <div class="img">
                                            <center><button type="button" class="btn btn-sm btn-outline-success mb-2">Manifestar interese</button></center>
                                            <img src="/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                                        </div>
                                        </div>
                    
                                        <div class="conteudo col-sm-9 mt-5">
                                        <div class="row">
                                            <div class="col-sm-6">
                                            <h5>Curso</h5>
                                            <p>Técnico de informática - Sistemas</p>
                                            </div>
                    
                                            <div class="col-sm-6">
                                            <h5>Área de integração</h5>
                                            <p>Gestão de redes</p>                            
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5 class="card-title">Descrição do trabalho</h5>
                                            <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5>Localização</h5>
                                            <p>São pedro, Ponta Delgada, São Miguel</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                                    <div class="row">
                                        <div class="logo col-sm-3">
                                        <div class="img">
                                            <center><button type="button" class="btn btn-sm btn-outline-success mb-2">Manifestar interese</button></center>
                                            <img src="/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                                        </div>
                                        </div>
                    
                                        <div class="conteudo col-sm-9 mt-5">
                                        <div class="row">
                                            <div class="col-sm-6">
                                            <h5>Curso</h5>
                                            <p>Técnico de informática - Sistemas</p>
                                            </div>
                    
                                            <div class="col-sm-6">
                                            <h5>Área de integração</h5>
                                            <p>Gestão de redes</p>                            
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5 class="card-title">Descrição do trabalho</h5>
                                            <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                                            </div>
                    
                                            <div class="col-sm-6 mt-5">
                                            <h5>Localização</h5>
                                            <p>São pedro, Ponta Delgada, São Miguel</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                    <td>Bem Saude</td>
                    <td>Duarte</td>
                    <td>Duarte.francico38@gmail.com</td>
                    <td>2</td>
                    <td><button type="submit" class="btn btn-primary">Ver mais</button></div></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            `;

        break;
    } 
}

function mostrarBotao(x,y){    
    if(document.getElementById(y).innerHTML === "")
    document.getElementById(x).style.display = 'block';

}

function esconderBotao(x){
    document.getElementById(x).style.display = "none";
}

function abrirCriarCurso(){
    document.getElementById("criacaoTurma").innerHTML = "";
    document.getElementById("criacaoAluno").innerHTML = "";

    document.getElementById('criacaoCurso').innerHTML = 
        `<div class="container mb-2">
            <div class="criarAluno shadow-lg p-3 bg-body rounded">
                <div class="row">
                    <div class="col-4 mx-auto">
                        <img class="img-fluid" style="height= 10px; width:auto;" src="http://localhost:3000/files/Assets/curso.svg" alt="aluno">
                    </div>

                    <div class="col-md-8">
                        <form>
                            <div class="row mt-4">
                                <div class="col-sm-6 mt-1">
                                    <label for="pNome" class="form-label"><strong>Nome do curso</strong></label>
                                    <input type="text" class="form-control" id="pNome" >
                                </div>
                        
                                <div class="col-sm-6 mt-1">
                                    <label for="pUltimo" class="form-label"><strong>Sigla</strong></label>
                                    <input type="text" class="form-control" id="pUltio" >
                                </div>
                        
                                <div class="col-sm-6 mt-1">
                                    <label for="turma" class="form-label"><strong>Area</strong></label>
                                    <select id="curso" class="form-select col-sm-12" aria-label="Default select example" >
                                        <option value="0" selected></option>
                                        <option value="">Informática</option>
                                        <option value="redes">Industrias</option>
                                        <option value="multimedia">Cozinha</option>
                                    </select>
                                </div>
                                <div class="col-sm-6 mt-1">
                                <label for="turma" class="form-label"><strong>Duração</strong></label>
                                <select id="curso" class="form-select col-sm-12" aria-label="Default select example" >
                                    <option value="0" selected></option>
                                    <option value="sistemas">1 ano</option>
                                    <option value="redes">3 anos</option>
                                </select>
                            </div>
                        </div>

                                <div class="col-sm-12 mt-4">
                                <center><button type="button" class="col-sm-3 btn btn-danger mx-1" style="border-radius: 30px;" onclick='document.getElementById("criacaoCurso").innerHTML = "";';>Fechar</button>
                                <button type="button" class="col-sm-3 btn btn-primary  mx-1" style="border-radius: 30px;">Criar curso</button></center>                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `;

    document.getElementById('criacaoCurso').scrollIntoView();
}

function abrirCriarTurma(){
    document.getElementById("criacaoCurso").innerHTML = "";
    document.getElementById("criacaoAluno").innerHTML = "";

    document.getElementById("criacaoTurma").innerHTML = `
    <div class="container mb-2">
    <div class="criarAluno shadow-lg p-3 mb-5 bg-body rounded">
        <div class="row">
            <div class="col-4 mx-auto">
                <img class="img-fluid" src="http://localhost:3000/files/Assets/turma.svg" alt="aluno">
            </div>

            <div class="col-md-8 mx-auto mt-3">
                <form>
                <div class="row mt-4">
                                <div class="col-sm-6 mt-1">
                                    <label class="form-label"><strong>Curso</strong></label>
                                    <select id="curso" class="form-select col-sm-12" aria-label="Default select example" >
                                        <option value=0 selected></option>
                                        <option value="sistemas">Técnico de informatica - Sistemas</option>
                                        <option value="redes">Técnico de informatica - Redes</option>
                                        <option value="multimedia">Técnico de informatica - Multimedia</option>
                                    </select>
                                </div>
                        
                                <div class="col-sm-6 mt-1">
                                    <label class="form-label"><strong>Ano</strong></label>
                                    <select id="ano" class="form-select col-sm-12" aria-label="Default select example" >
                                        <option value=0 selected></option>
                                        <option value=1> 2º ano</option>
                                        <option value=2>3º ano</option>
                                    </select>
                                </div>
                                <div class="col-sm-6 mt-1">
                            <label for="turma" class="form-label"><strong>Diretor de turma</strong></label>
                            <select id="curso" class="form-select col-sm-12" aria-label="Default select example" >
                                <option value="0" selected></option>
                                <option value="sistemas">Ana Pereira - anapereira@enta.pt</option>
                                <option value="redes">Duarte Cota - duartecota@enta.pt</option>
                            </select>
                                </div>
                                
                        
                        <div class="col-sm-12 mt-4">
                                
                                    <center><button type="button" class="col-sm-3 btn btn-danger mx-1" style="border-radius: 30px;" onclick='document.getElementById("criacaoTurma").innerHTML = "";'>Fechar</button>
                                    <button type="button" class="col-sm-3 btn btn-primary  mx-1" style="border-radius: 30px;">Criar turma</button></center>
                        </div>
                </form>
                    </div> 
                </form>
            </div>
        </div>
    </div>
</div>`;
    document.getElementById('criacaoTurma').scrollIntoView();
}

function abrirCriarAluno(){
    document.getElementById("criacaoCurso").innerHTML = "";
    document.getElementById("criacaoTurma").innerHTML = "";

    document.getElementById("criacaoAluno").innerHTML = `
    <div class="container mb-2">
    <div class="criarAluno shadow-lg p-3 bg-body rounded">
        <div class="row">
            <div class="col-4 mx-auto">
                <img class="img-fluid" style="height= 10px; width:auto;" src="http://localhost:3000/files/Assets/criarAluno.svg" alt="aluno">
            </div>

            <div class="col-md-8">
                <form>
                    <div class="row mt-4">
                        
                    <div class="col-sm-6 mt-1">
                        <label class="form-label"><strong>Curso</strong></label>
                        <select id="curso" class="form-select col-sm-12" aria-label="Default select example" >
                            <option value=0 selected></option>
                        </select>
                    </div>
            
                    <div class="col-sm-6 mt-1">
                        <label class="form-label"><strong>Turma</strong></label>
                        <select id="ano" class="form-select col-sm-12" aria-label="Default select example" >
                            <option value=0 selected></option>
                        </select>
                    </div>

                    <div class="col-sm-6 mt-1">
                    <label for="pNome" class="form-label"><strong>Primeiro e último nome</strong></label>
                    <input type="text" class="form-control" id="pNome" > </input>
                </div>


                <div class="col-sm-6 mt-1">
                    <label for="pUltio" class="form-label"><strong>Email</strong></label>
                    <input type="text" class="form-control" id="pUltio" > </input>
                </div>

                        <div class="col-sm-12 mt-4">
                            <center><button type="button" class="col-sm-3 btn btn-danger mx-1" style="border-radius: 30px;" onclick='document.getElementById("criacaoAluno").innerHTML = "";'>Fechar</button>
                            <button type="button" class="col-sm-3 btn btn-primary mx-1" style="border-radius: 30px;">Criar Aluno</button></center>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
`

    document.getElementById('criacaoAluno').scrollIntoView();
}

function abrirCriarAdm(){
    document.getElementById("criacaoDTS").innerHTML = "";
    document.getElementById("criacaoAdm").innerHTML = `
    <div class="container mt-5">
    <div class="criarAluno shadow-lg p-3 mb-5 bg-body rounded">
        <div class="row">
            <div class="col-6 mx-auto">
                <img class="img-fluid " src="http://localhost:3000/files/Assets/diretorTurma.svg" alt="aluno">
            </div>

            <div class="col-md-6 mt-4 mb-5">
                <form>
                    <div class="col-sm-12 mt-1">
                        <div class="mt-1" style="display: flex; justify-content: space-between;">
                            <label for="emailadd" class="form-label"><strong>Email</strong></label>
                                <div style="display: inline-block; width: 100%; text-align: right;" id="erroEmail"></div>
                        </div>
                        
                        <div id="emailHelp" class="form-text"><input type="email" class="form-control" id="email" aria-describedby="emailHelp" maxlength="255" onchange="validaEmail();" onclick="document.getElementById('erro').innerHTML = '';"></div>
                    </div>

                    <div class="col mt-4">
                        <center><div id="btn"><button type="button" class="col-sm-5 btn btn-primary" style="border-radius: 30px;" onclick="adicionar();">Adicionar</button></div></center>
                        <center><div id="erro" class="mt-4"></div></center>
                    </div>
                            
                    <div class="table-responsive-md mx-auto mt-3">
                        <table class="table text-center align-middle mt-2" id="tabela">
                            <thead>
                                <tr>
                                    <th class="text-center" scope="col">Email</th>
                                    <th class="text-center" scope="col">Ações</th>

                                </tr>
                            </thead >

                            <tbody id="lista">
                            </tbody>
                        </table>
                        <center><button type="button" class="col-sm-5 btn btn-primary mt-1" style="border-radius: 30px; display: none;" onclick="introduzir();" id="btnIntroduzir">Introduzir no sistema</button></center>
                    </div>
                </form>
            </div>
        </div>     
    </div>
</div>`

    document.getElementById('criacaoAdm').scrollIntoView();
}

function abrirCriarDTS(){
    document.getElementById('criacaoAdm').innerHTML = "";
    document.getElementById("criacaoDTS").innerHTML = `
    <div class="container mt-5">
        <div class="criarAluno shadow-lg p-3 mb-5 bg-body rounded">
            <div class="row">
                <div class="col-6">
                    <img class="img-fluid" src="http://localhost:3000/files/Assets/diretorTurma.svg" alt="aluno">
                </div>

                <div class="col-6 mt-4">
                    <form>
                            <div class="col-sm-12">
                                <label for="email" class="form-label"><strong>Email</strong></label>
                                <input type="text" class="form-control" id="email" style="border-radius: 15px;">
                            </div>

                            <div class="col-sm-12 mt-2">
                                <div class="table-responsive-sm">
                                    <table class="table text-center align-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Turma</th>
                                                <th scope="col">Ano </th>
                                                <th scope="col">Curso</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><div><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label=""></div></td>
                                                <td>Tis T1</td>
                                                <td>3º</td>
                                                <td>Tecnico de informatica - Sistemas</td>
                                            </tr>
                                    
                                            <tr>
                                                <td><div><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label=""></div></td>
                                                <td>Tis T1</td>
                                                <td>3º</td>
                                                <td>Tecnico de informatica - Sistemas</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="col mt-4">
                                <center><button type="submit" class="col-sm-5 btn btn-primary" style="border-radius: 30px;">Adicionar</button></center>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="container mt-3 shadow-lg p-3 mb-5 bg-body rounded col-sm-12" >
                <div class="table-responsive-sm mx-auto col-sm-6">
                    <table class="table text-center align-middle">
                        <thead>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">Ações</th>

                            </tr>
                        </thead>
                        <tbody>                   
                        </tbody>
                    </table>
                    <center><button type="submit" class="col-sm-5 btn btn-primary mt-1" style="border-radius: 30px;">Introduzir no sistema</button></center>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById('criacaoDTS').scrollIntoView();
}