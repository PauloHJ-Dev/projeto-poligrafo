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
    "Você conhece a vítima ou alguma pessoa diretamente envolvida no caso?",
    "Você esteve no local onde o ocorrido aconteceu?",
    "Você tinha conhecimento de que algo poderia acontecer?",
    "Você teve algum contato com provas ou evidências relacionadas ao caso?",
    "Você sabe de algo que poderia mudar o rumo desta investigação?",
    "Alguém pediu sua ajuda para realizar alguma ação relacionada ao caso?",
    "Você tem conhecimento de alguma pessoa que esteja envolvida no caso e ainda não tenha sido investigada?",
    "Você possui algum motivo pessoal para querer prejudicar alguém envolvido no caso?",
    "Você acredita que a pessoa responsável pelo ocorrido está entre os suspeitos já identificados?",
    "Você conseguiria provar sua inocência diante de todas as evidências apresentadas?"
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
            ? "Finalizar teste"
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

    resumo.innerHTML =
        `Sim:  <span style="color: red;"> ${totalSim}</span> | Não: ${totalNao}`;

    let classificacao = "";
    let descricao = "";
    let cor = "";

// Classificar com base no número de respostas Sim
if (totalSim < 5) {
     classificacao = "Inocente";
     descricao = "As evidências apresentadas não indicam envolvimento significativo na ocorrência.";
     cor = "green";
}else if (totalSim ===5){
     classificacao = "Suspeito(a)";
     descricao = "Foram encontrados indícios que justificam investigação adicional";  
     cor = "yellow";
}else if (totalSim >= 6 && totalSim <= 8) {
     classificacao = "Cúmplice";
     descricao = "A quantidade de evidências sugere possível participação indireta no crime";
     cor = "orange";
}else if (totalSim >= 9 && totalSim <= 10) {
     classificacao = "Culpado(a)";
     descricao = "As evidências indicam envolvimento direto e significativo na ocorrência.";
     cor = "red";
}

 document.getElementById("classificacao").innerHTML = ` <span style="color: ${cor};"> ${classificacao}</span> `;
 document.getElementById('descricao').textContent = descricao;
}
// Reiniciar teste
function refazerTeste() { 
    indiceAtual = 0;
    respostas.length = 0;
    resultado.hidden = true;
    formulario.hidden = false;
    mostrarPergunta();
}




