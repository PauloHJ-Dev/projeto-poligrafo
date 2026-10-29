// const prompt = require('prompt-sync')();

// let sim= 0
// let num_perguntas=0


//  while (true) {

//     let pergunta1= prompt("Você ligou para a vítima(S ou N)?");
//     if (pergunta1 === "S"){
//        sim++
//        num_perguntas++
//     }
//     else{
//         num_perguntas++
//     }
   
//     let pergunta2= prompt("Você estava no local da ocorrência(S ou N)?");
//     if (pergunta2 === "S"){
//        sim++
//        num_perguntas++
//     }
//     else{
//         num_perguntas++
//     }

//     let pergunta3= prompt("Você mora perto da vítima(S ou N)?");
//     if (pergunta3 === "S"){
//        sim++
//        num_perguntas++
//     }
//     else{
//         num_perguntas++
//     }

//      let pergunta4= prompt("Você já trabalhou com a vítima(S ou N)?");
//     if (pergunta4 === "S"){
//        sim++
//        num_perguntas++
//     }
//     else{
//         num_perguntas++
//     }

//      let pergunta5= prompt("Você viu a vítima no dia da ocorrência(S ou N)?");
//     if (pergunta5 === "S"){
//        sim++
//        num_perguntas++
//     }
//     else{
//         num_perguntas++
//     }

//      let pergunta6= prompt("Você tinha proximidade com a vítima(S ou N)?");
//     if (pergunta6 === "S"){
//        sim++
//        num_perguntas++
//     }
//     else{
//         num_perguntas++
//     }

//      let pergunta7= prompt("Você já teve alguma briga ou desentendimento com a vítima(S ou N)?");
//     if (pergunta7 === "S"){
//        sim++
//        num_perguntas++
//     }
//     else{
//         num_perguntas++
//     }

//      let pergunta8= prompt("Você ficou sabendo do ocorrido no mesmo dia em que ele ocorreu(S ou N)?");
//     if (pergunta8 === "S"){
//        sim++
//        num_perguntas++
//     }
//     else{
//         num_perguntas++
//     }

//      let pergunta9= prompt("Você ficou feliz com o que aconteceu com a vítima(S ou N)?");
//     if (pergunta9 === "S"){
//        sim++
//        num_perguntas++
//     }
//     else{
//         num_perguntas++
//     }

//      let pergunta10= prompt("Você tinha algo contra ela(S ou N)?");
//     if (pergunta10 === "S"){
//        sim++
//        num_perguntas++
//     }
//     else{
//         num_perguntas++
//     }
//     break;
//  }

// if (sim === 5) {
//   console.log("Você é Suspeito");
// } else if (sim >= 6 && sim <= 8) {
//   console.log("Você é Cúmplice");
// } else if(sim >= 9 && sim <= 10){
//     console.log("Você é Culpado");
// }
// else {
//   console.log("Você é Inocente");
// }



const perguntas = [
    "Você costuma guardar segredos?",
    "Você já mentiu para evitar problemas?",
    "Você se considera uma pessoa observadora?"
];

const respostas = [];

let indiceAtual = 0;

// Selecionar os elementos do HTML
const inicio = document.getElementById("inicio");
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

const contador = document.getElementById("contador");
const pergunta = document.getElementById("pergunta");
const resumo = document.getElementById("resumo");

const botaoIniciar = document.getElementById("botaoIniciar");
const botaoProximo = document.getElementById("botaoProximo");

const opcoesResposta = document.querySelectorAll(
    'input[name="resposta"]'
);

// Iniciar o formulário
botaoIniciar.addEventListener("click", iniciarFormulario);

function iniciarFormulario() {
    inicio.hidden = true;
    formulario.hidden = false;

    indiceAtual = 0;
    respostas.length = 0;

    mostrarPergunta();
}

// Exibir a pergunta atual
function mostrarPergunta() {
    pergunta.textContent = perguntas[indiceAtual];

    contador.textContent =
        `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;

    // Desmarcar as opções da pergunta anterior
    opcoesResposta.forEach(function (opcao) {
        opcao.checked = false;
    });

    // Desabilitar o botão até escolher uma resposta
    botaoProximo.disabled = true;

    // Alterar o texto do botão na última pergunta
    botaoProximo.textContent =
        indiceAtual === perguntas.length - 1
            ? "Finalizar"
            : "Próxima pergunta";
}

// Detectar quando uma opção for selecionada
opcoesResposta.forEach(function (opcao) {
    opcao.addEventListener("change", function () {
        botaoProximo.disabled = false;
    });
});

// Avançar para a próxima pergunta
botaoProximo.addEventListener("click", proximaPergunta);

function proximaPergunta() {
    // Encontrar a opção selecionada
    const opcaoSelecionada = document.querySelector(
        'input[name="resposta"]:checked'
    );

    // Impedir avanço sem resposta
    if (!opcaoSelecionada) {
        return;
    }

    // Armazenar a pergunta e a resposta
    respostas.push({
        pergunta: perguntas[indiceAtual],
        resposta: opcaoSelecionada.value
    });

    // Verificar se ainda existem perguntas
    if (indiceAtual < perguntas.length - 1) {
        indiceAtual++;
        mostrarPergunta();
    } else {
        finalizarFormulario();
    }
}

// Exibir o resultado final
function finalizarFormulario() {
    formulario.hidden = true;
    resultado.hidden = false;

    // Contar as respostas Sim
    const totalSim = respostas.filter(
        item => item.resposta === "Sim"
    ).length;

    // Contar as respostas Não
    const totalNao = respostas.filter(
        item => item.resposta === "Não"
    ).length;

    resumo.textContent =
        `Sim: ${totalSim} | Não: ${totalNao}`;

    // Mostrar todas as respostas no console
    console.log(respostas);
}



