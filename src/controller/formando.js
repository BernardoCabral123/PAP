function renderCode(id,codigo){
    document.getElementById(id).innerHTML = codigo;
}

function renderPerfilFormando(){
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
                <div class="col-sm-4">
                    <h5>Nome</h5>
                    <p>Diogo Branco</p>
                </div>

                <div class="col-sm-4">
                    <h5>Curso</h5>
                    <p>Tecnico de informatica - Sistemas</p>                            
                </div>

                <div class="col-sm-4">
                    <h5>Turma</h5>
                    <p>T1</p>                            
                </div>

                <div class="col-sm-4">
                    <h5>Data de nascimento</h5>
                    <p>10/12/2002</p>                            
                </div>

                <div class="col-sm-4">
                    <h5>Morada</h5>
                    <p>São pedro, Ponta Delgada, São Miguel</p>
                </div>

                <div class="col-sm-4">
                    <h5>Currícolo</h5>
                    <button type="submit" class="btn btn-primary"><i class="fas fa-user-alt"></i></button>                         
                </div>
            </div>
        </div>
    </div>
</div>
</div>`);}
function renderOfertas(){
    renderCode('content',`<div class="container mt-5" style="background-color: #3898ec;">
    <div class="collapse navbar-collapse">
        
    </div>
</div>

<div class="container mt-5">
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #3898ec;">
        <div class="container-fluid">
            <a class="navbar-brand">Filtragem</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-4">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Curso</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
    
                        <div class="col-sm-4">
                            <select class="form-select" aria-label="Default select example" id="ilha" onchange="getConcelhos();">
                                <option selected></option>
                            </select>
                        </div>
    
                        <div class="col-sm-4">
                            <select class="form-select" aria-label="Default select example" id="concelho" disabled>
                                <option selected></option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>

<div class="container">
    <div class="mt-5">
        <h2>Anuncios existentes</h2>
    </div>

    <div class="card mt-5 shadow-lg p-3 mb-5 bg-body rounded">
        <div class="row">
            <div class="logo col-sm-3">
                <div class="img">
                    <center><button type="button" class="btn btn-sm btn-outline-primary mt-2 mb-2">Manifestar interese</button></center>
                    <img src="http://localhost:3000/files/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                </div>
            </div>

            <div class="col-sm-4 mt-5">
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

            <div class="col-sm-5 mt-5">
                <div class="col">
                    <h5 class="card-title">Descrição do trabalho</h5>
                    <p class="card-text">Gestão de redes e equipamento informático da empresa</p> 
                </div>
            </div>
        </div>
    </div>

    <div class="card mt-5 shadow-lg p-3 mb-5 bg-body rounded">
        <div class="row">
            <div class="logo col-sm-3">
                <div class="img">
                    <center><button type="button" class="btn btn-sm btn-outline-primary mt-2 mb-2">Manifestar interese</button></center>
                    <img src="http://localhost:3000/files/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                </div>
            </div>

            <div class="col-sm-4 mt-5">
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

            <div class="col-sm-4 mt-5">
                <div class="col">
                    <h5 class="card-title">Descrição do trabalho</h5>
                    <p class="card-text">Gestão de redes e equipamento informático da empresa</p> 
                </div>
            </div>

            <div class="col-sm-1">
                <div class="col">
                    <div class="row mx-auto">
                        <button type="button" class="btn btn-primary mt-5"><i class="fas fa-user-alt"></i></button> <button type="button" class="btn btn-success mt-3"><i class="fas fa-check"></i></button> <button type="button" class="btn btn-danger mt-3"><i class="fas fa-times"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-3">
        <h2>Inscrições pendentes</h2>
    </div>

    <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
        <div class="row">
            <div class="logo col-sm-3">
                <div class="img">
                    <center><button type="button" class="btn btn-sm btn-outline-danger mb-2">Cancelar interese</button></center>
                    <img src="http://localhost:3000/files/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
                </div>
            </div>

            <div class="col-sm-4 mt-5">
                <div class="col">
                    <h5>MUSAMI</h5>
                </div>

                <div class="col">
                    <h5>Area</h5>
                    <p>Técnico de informática - Sistemas</p>
                </div>
            </div>

            <div class="col-sm-5 mt-5">
                <div class="col">
                    <h5>Localização</h5>
                    <p>São pedro, Ponta Delgada, São Miguel</p>                            
                </div>

                <div class="col">
                    <h5 class="card-title">Descrição do trabalho</h5>
                    <p class="card-text">Gestão de redes e equipamento informático da empresa</p>                           
                </div>
            </div>
        </div>
    </div>
    
    <h2>Anuncios confirmados</h2>
    <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
        <div class="row">
            <div class="logo col-sm-3">
                <div class="img">
                    <center><button type="button" class="btn btn-sm btn-outline-success mb-2">Confirmar estagio</button></center>
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
</div>`)
}