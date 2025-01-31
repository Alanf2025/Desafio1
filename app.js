// 1
let nome = "Alan";
console.log(nome);

// 2
let idade = 23;
let altura = 1.85;
console.log(idade, altura);

// 3
let preco = 50;
let desconto = 0.2;
let precoFinal = preco * (1 - desconto);
console.log(precoFinal);

// 4
let temperatura = 30;
if (temperatura > 25) {
    console.log("Está calor!");
} else {
    console.log("Está fresco!");
}

// 5
let idadePessoa = 18;
if (idadePessoa >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// 6
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// 7
let numero1 = 10;
let numero2 = 15;
if (numero1 === numero2) {
    console.log("Os números são iguais");
} else {
    console.log("Os números são diferentes");
}

// 8
let nomePessoa = "Alan";
let idadePessoa2 = 23;
console.log(`Olá, meu nome é ${nomePessoa} e eu tenho ${idadePessoa2} anos`);

// 9
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 10
let numero;
do {
    numero = parseInt(prompt("Digite um número:"));
} while (numero !== 5);

// 11
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 12
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// 13
function calcularAreaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}
console.log(calcularAreaCirculo(5)); // Exemplo com raio = 5

// 14
let num1 = 10;
let num2 = 20;
let soma = num1 + num2;
console.log("A soma é:", soma);

// 15
function somar(a, b) {
    return a + b;
}
let resultado = somar(10, 20);
console.log(resultado);
