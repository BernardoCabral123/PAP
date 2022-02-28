function renderCode(id,codigo){
    document.getElementById(id).innerHTML = codigo;
}

function openModal(id) {
    var myModal = new bootstrap.Modal(document.getElementById(id), {  keyboard: false });
    myModal.show();
  }