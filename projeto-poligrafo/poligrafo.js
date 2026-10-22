const prompt = require('prompt-sync')();

let sim= 0
let num_perguntas=0


 while (true) {

    let pergunta1= prompt("Você ligou para a vítima(S ou N)?");
    if (pergunta1 === "S"){
       sim++
       num_perguntas++
    }
    else{
        num_perguntas++
    }
   
    let pergunta2= prompt("Você estava no local da ocorrência(S ou N)?");
    if (pergunta2 === "S"){
       sim++
       num_perguntas++
    }
    else{
        num_perguntas++
    }

    let pergunta3= prompt("Você mora perto da vítima(S ou N)?");
    if (pergunta3 === "S"){
       sim++
       num_perguntas++
    }
    else{
        num_perguntas++
    }

     let pergunta4= prompt("Você já trabalhou com a vítima(S ou N)?");
    if (pergunta4 === "S"){
       sim++
       num_perguntas++
    }
    else{
        num_perguntas++
    }

     let pergunta5= prompt("Você viu a vítima no dia da ocorrência(S ou N)?");
    if (pergunta5 === "S"){
       sim++
       num_perguntas++
    }
    else{
        num_perguntas++
    }

     let pergunta6= prompt("Você tinha proximidade com a vítima(S ou N)?");
    if (pergunta6 === "S"){
       sim++
       num_perguntas++
    }
    else{
        num_perguntas++
    }

     let pergunta7= prompt("Você já teve alguma briga ou desentendimento com a vítima(S ou N)?");
    if (pergunta7 === "S"){
       sim++
       num_perguntas++
    }
    else{
        num_perguntas++
    }

     let pergunta8= prompt("Você ficou sabendo do ocorrido no mesmo dia em que ele ocorreu(S ou N)?");
    if (pergunta8 === "S"){
       sim++
       num_perguntas++
    }
    else{
        num_perguntas++
    }

     let pergunta9= prompt("Você ficou feliz com o que aconteceu com a vítima(S ou N)?");
    if (pergunta9 === "S"){
       sim++
       num_perguntas++
    }
    else{
        num_perguntas++
    }

     let pergunta10= prompt("Você tinha algo contra ela(S ou N)?");
    if (pergunta10 === "S"){
       sim++
       num_perguntas++
    }
    else{
        num_perguntas++
    }
    break;
 }

if (sim === 5) {
  console.log("Você é Suspeito");
} else if (sim >= 6 && sim <= 8) {
  console.log("Você é Cúmplice");
} else if(sim >= 9 && sim <= 10){
    console.log("Você é Culpado");
}
else {
  console.log("Você é Inocente");
}


