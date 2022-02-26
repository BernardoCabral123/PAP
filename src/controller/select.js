var autenticado = true;
var tipoUser = 'admin';

function renderCode(id,codigo){
    document.getElementById(id).innerHTML = codigo;
}

function renderContent(){
    let codigoNav;

    if(autenticado){

        switch (tipoUser){
            case 'admin':
                codigoNav = `<nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #3898ec;">
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
                                <li class="nav-item" onclick="renderDuvidas();">
                                    <a class="nav-link" >Duvidas</a>
                                </li>
                                <li class="nav-item" onclick="logout();">
                                    <a class="nav-link">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                `;
                break;
            case 'diretor de turma':
                codigoNav = ``;
                break;
            case 'formando':
                codigoNav = `<nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #3898ec;">
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
            </nav>
            `;
                break;
            case 'empresa':
                codigoNav = `<nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #3898ec;">
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
            </nav>
            `;
                break;
    }

    }
    else{
        codigoNav = `<nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #3898ec;">
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
    `;
    }
    renderCode("navbar",codigoNav);

    document.getElementById("navbar").scrollIntoView()
};



//todos
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
function logout(){
    //codigo de limpesa do token
    location.reload()
}


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