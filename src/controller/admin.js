function renderCode(id,codigo){
    document.getElementById(id).innerHTML = codigo;
}

function renderGerirRecursos(){
    renderCode("content",
`<div class="container mt-3 mb-4">
<div class="row">
  <h2>Gerir recursos</h2>
  <div class="col-sm-2">
    <select id="estado" class="form-select col-sm-6 mx-1 " onchange="selecionar();" aria-label="Default select example">
      <option selected value="alunos">Alunos</option>
      <option value="empresa">Empresas</option>
      <option value="adminsDiretores">Administradores</option>
    </select>
  </div>
</div>
</div>

<div class="container">
<div id="painelGestao">
<div class="mt-4">
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

</div>
</div>`);}
