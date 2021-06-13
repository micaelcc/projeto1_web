const msgs = [];

//Funcao que para adicionar nova mensagem
function new_message() {
    //Carrega os textos de erro ou confirmacao, feedback
    var confirm = document.getElementById('confirmSubmit');
    var err = document.getElementById('errorSubmit');

    //Se algum ou os dois campos estiverem vazios, erro
    if (!document.getElementById('nome_recado').value ||
        !document.getElementById('recado').value) {
        err.style.display = "block";
        setTimeout(() => {
            err.style.display = "none";
        }, 3000);

        return;
    }

    //Cria um objeto com nome e mensagem passados
    const msg = {
        nome: document.getElementById('nome_recado').value,
        mensagem: document.getElementById('recado').value
    };

    //Adiciona na lista
    msgs.push(msg);

    //Atualiza no html
    atualizaDados(msg);

    //Mostra o feedback de confirmaçao de envio da mensagem
    confirm.style.display = "block";

    //Remove a mensagem apos 3 segundos
    setTimeout(() => {
        confirm.style.display = "none";
    }, 3000);
}

//Funcao para atualizar e criar mensagem no site
function atualizaDados(msg) {
    //Verifica se existe mensagens, e torna a linha final_hr
    //visivel para separar do restante do site
    if (msgs.length == 1) {
        var hr_final = document.getElementById('final_hr');
        hr_final.style.display = "block";
    }

    //Recupera a div das mensagens
    var div_msgs = document.getElementById('msgs');

    //Cria uma nova linha, para uma mensagem
    var line = document.createElement("div");

    //Id da linha será "row_msgX", onde X é a posicao
    //da linha na lista de mensagens
    line.id = "row_msg" + (msgs.length - 1);

    //Classe da linha será "row_msg"
    line.className = "row_msg";

    //Cria um elemento div para o texto ("nome" : "mensagem")
    var text_msg = document.createElement("div");

    //
    text_msg.id = "text_msg" + (msgs.length - 1);
    text_msg.className = "text_msg";

    //Cria uma div para o elemento button
    var msg_button = document.createElement("div");

    //
    msg_button.id = "msg_button" + (msgs.length - 1);
    msg_button.className = "msg_button";

    //Cria o botao "excluir"
    var button = document.createElement("button");

    //Atribui o texto
    button.innerHTML = "Excluir";

    //Classe
    button.className = "btn_msg";

    //Evento, função que sera chamada ao clicar
    button.onclick = removeMsg

    //Informação a passar via parametro (index da mensagem)
    button.index = String(msgs.length - 1);

    //
    button.id = "btn_msg" + (msgs.length - 1);

    //Nome (em negrito)
    var nome = document.createElement("b");

    //
    nome.innerHTML = msg.nome + ': ';
    var mensagem = document.createTextNode(msg.mensagem);

    //Adiciona nome e mensagem a div "text_msg"
    text_msg.appendChild(nome);
    text_msg.appendChild(mensagem);

    //Adiciona o botao a div msg_button
    msg_button.appendChild(button)

    //Adiciona text_msg e msg_button a div principal,
    //que é a mensagem completa
    line.appendChild(text_msg);
    line.appendChild(msg_button);

    //Margem de 10px ao redor das divs
    line.style.margin = "10px";

    //Adiciona a nova mensagem (linha) na div de mensagens
    div_msgs.appendChild(line);
}

//Funçao que remove mensagem
function removeMsg(msg) {
    //Remove a mensagem da lista msgs pelo index
    msgs.pop(msg.target.index);

    //Recupera o elemento no html da mensagem a ser deletada
    //pelo nome do id "row_msgX", utilizando index
    var msg_delete = document.getElementById("row_msg" + msg.target.index);

    //Remove o elemento buscado
    msg_delete.remove();

    //Caso o numero de mensagens passe a ser 0, torna
    //a linha hr final oculta.
    if (msgs.length == 0) {
        var final_hr = document.getElementById('final_hr');
        final_hr.style.display = "none";
    }
}