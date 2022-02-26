function renderCode(id,codigo){
    document.getElementById(id).innerHTML = codigo;
}

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
<div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
    <div class="row">
        <div class="logo col-sm-3">
            <div class="img">
                <img src="http://localhost:3000/files/Assets/MUSAMI.jpg" class="img-fluid" alt="logo" style="width: 225px; height: 225px;">
            </div>
        </div>

        <div class="conteudo col-sm-9">
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

function openModal(id) {
    var myModal = new bootstrap.Modal(document.getElementById(id), {  keyboard: false });
    myModal.show();
  }