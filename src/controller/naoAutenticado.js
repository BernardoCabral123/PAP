function renderCode(id,codigo){
    document.getElementById(id).innerHTML = codigo;
}

function renderLogin(){
    renderCode("content",
`<div id="formulario" class="container mt-5 shadow-lg p-3 mb-5 bg-body rounded">
            <div class="container">
                <center><img width="300px" height="auto" src="http://localhost:3000/files/Assets/logoPlataforma.png" class="img-fluid" alt=""></center>
                <center><p class="mt-3">Se não possui conta faça o seu <a onclick='renderRegisto();' class="text-primary" style="cursor: pointer;"><strong>registo</strong></a></p></center>
            </div>
            
            <div class="container">
                <form class="needs-validation" novalidate>
                    <center><div class="row" style="max-width: 460px; text-align: start;">
                        <div class="col-sm-12 mb-3">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" class="form-control" id="email" placeholder="email" name="email" style="border-radius: 20px;" required>
                        </div>
                        <div class="col-sm-12 mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password" style="border-radius: 20px;" required>
                        </div>
                        <center><button style="border-radius: 20px; width: 150px; height: auto;" type="submit" class="btn btn-primary">Login</button></center>
                    </div></center>
                </form>
            </div>
        </div>`);
}

function renderRegisto(){
    renderCode("content",`
    <div class="container mt-5">
    <div class="shadow-lg p-3 mb-5 bg-body rounded">
        <div class="info">
            <center><div class="mt-1">
                <h1>Registo</h1>
                <p>Se ja possui conta faça <a onclick='renderLogin();' class="text-primary" style="cursor: pointer;"><strong>login</strong></a></p>
            </div></center>
        </div>
        <div class="row">
            <div class="imgCriarAnuncio col-sm-6 mt-3">
                <img class="img-fluid" src="http://localhost:3000/files/Assets/criarEmpre.svg" alt="criar conta">
            </div>

            <div class="formulario col-sm-6 mt-5">
                <form id="registoEmpresario" class="needs-validation" novalidate>
                    <div class="row">

                        <div class="col-sm-12 mt-1">
                            <div class="mt-1">
                                <label for="emailadd" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" maxlength="255" required>
                            </div>
                        </div>

                        <div class="col-sm-12 mt-1">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" maxlength="500" pattern=".{9,}" required>
                            <!--<div class="invalid-feedback"><p>no minimo 8 caracters</p></div>-->
                        </div>

                        <div class="col-sm-12 mt-1">
                            <label for="nomeempresa" class="form-label">Nome da empresa</label>
                            <input type="text" class="form-control" id="nome" maxlength="50" required>
                        </div>


                        <div class="col-sm-12 mt-1">
                            <label for="contactoTelefonico" class="form-label">Contacto telefónico</label>
                            <input type="tel" class="form-control" id="contactoTelefonico" placeholder="+351" pattern=".{9,}" onKeyPress="if(this.value.length==9) return false;" placeholder="+351" onchange="validaContactoTelefonico()" required>
                        </div>
                        
                        <div class="form-check col-sm-12 mt-3" style="margin-left: 12px;">
                            <input class="form-check-input" type="checkbox" id="termosUso" required>
                            <label class="form-check-label" for="termosUso">Aceitar</label>
                            <a onclick='openModal("termos");' class="text-primary" style="cursor: pointer;"><strong>Termos de uso</strong></a>
                            
                            <!-- <Modal> -->
                            <div class="modal fade" id="termos">
                                <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Termos de uso da utilização do sistema</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    Termos do sistema
                                    </div>
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <!-- </Modal> -->

                        </div>

                        <div class="col-sm-12 justify-content-center mt-4">
                            <center><button type="button" class="col-sm-6 btn btn-primary" style="border-radius: 30px;" onclick='console.log("criar conta");'>Criar conta</button></center>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
`);
}

function validacao() {  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          else{
            cConta();
          }
          form.classList.add('was-validated')
        }, false)
      })
}

async function fillIlhas(){
    await fetch('http://localhost:3000/api/localizacao/ilhas')
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i< data.length; i++){
            document.getElementById("ilha").innerHTML+= `<option value="${data[i].idIlha}">${data[i].nome}</option>`
    }})
    .catch((err)=>{
        console.log(err)
        alert('Erro na recolha das ilhas')
    })
}

async function fillConcelhos(){
    if(document.getElementById("ilha").value != 0){
        document.getElementById('concelho').disabled = false;
        await fetch(`http://localhost:3000/api/localizacao/concelhos/${document.getElementById("ilha").value}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("concelho").innerHTML="";
            for(let i = 0; i< data.length; i++){
                document.getElementById("concelho").innerHTML+= `<option value="${data[i].idConcelho}">${data[i].nome}</option>`
        }})
        .catch((err)=>{
            alert('Erro na recolha dos concelhos')
        })
    }
    else{

        document.getElementById('concelho').value = 0;
        document.getElementById('concelho').disabled = true;
    }
}


function cConta(){
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            nome: document.getElementById("nome").value,
            contactoTelefonico: document.getElementById("contactoTelefonico").value,
        })
    }

    fetch('http://localhost:3000/api/empresas', options)
    .then(res => res.text())
    .then(text =>{
        alert(text)
    })
    .catch((err) =>{
        alert("Ocorreu um erro na efetuação do seu registo");
        alert(err);
    })
}

function openModal(id) {
    var myModal = new bootstrap.Modal(document.getElementById(id), {  keyboard: false });
    myModal.show();
  }

  /*                        <div class="col-sm-6 mt-1">
                            <label for="ilha" class="form-label">Ilha</label>
                            <select class="form-select" aria-label="Default select example" id="ilha" onchange="fillConcelhos();" required>
                                <option selected></option>
                            </select>
                        </div>
            
                        <div class="col-sm-6 mt-1">
                            <label for="conselho" class="form-label">Concelho</label>
                            <select class="form-select" aria-label="Default select example" id="concelho" disabled required>
                                <option selected></option>
                            </select>
                        </div>

                        <div class="col-sm-6 mt-1">
                            <label for="morada" class="form-label">Rua</label>
                            <input type="text" class="form-control" id="rua" maxlength="100" required>
                        </div>

                        <div class="col-sm-6 mt-1">
                            <label for="nRua" class="form-label">Nº Porta</label>
                            <input type="text" class="form-control" id="numero" maxlength="10" required>
                        </div> */