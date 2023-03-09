console.log("Desafio two Day");
let nome = prompt("Digite seu nome?");
let idade = prompt("Qual sua idade?");
let ling = prompt("Qual linguagem de programação você está estudando?");
alert(`Olá, ${nome}! Você tem ${idade} anos e já está aprendendo ${ling}.`);
let question = prompt("Você gosta de estudar ?" + ling + " Responda o numero 1 para SIM ou 2 para NÃO!");
if (question == 1) {
alert('Muito bom! Continue estudando e você terá muito sucesso');
} else if (question == 2) {
alert('Ahh que pena... Já tentou aprender outras linguagens?');
} else {
alert('Não tem essa opção meu amigo!!!!!');
}
