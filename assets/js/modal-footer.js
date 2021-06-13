//Recupera div da modal (que fica ocultada na pagina)
var modal = document.getElementById("myModal");

//Recupera o botao do footer que chama a modal
var btn = document.getElementById("myBtn")

//Botao para fechar a modal
var span = document.getElementsByClassName("close")[0]

//Mostra a modal na tela ao clicar no botao
btn.onclick = function() {
    modal.style.display = "block";
}

//Fecha a modal
span.onclick = function() {
    modal.style.display = "none";
}

//Fecha a modal ao clicar ao redor
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}