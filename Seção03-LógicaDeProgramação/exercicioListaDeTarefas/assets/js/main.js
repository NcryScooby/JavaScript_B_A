const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
    const li = document.createElement("li");
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

inputTarefa.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        if (inputTarefa.value.length > 0) {
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
}});

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener("click", function () {
    if (inputTarefa.value.length > 0) {
    criaTarefa(inputTarefa.value);
    limpaInput();
    }
});

document.addEventListener("click", function(e) {
    const el = e.target;
    if (el.classList.contains("apagar")) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll("li");
    const listadeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listadeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listadeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listadeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listadeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();