// 1 - Variáveis
let nome = "Fábio";
console.log("Meu nome é: "+nome);
nome = "Fábio Simones"
console.log("Meu nome é: "+nome);

const idade = 29;
console.log("Minha idade é: " + idade + " anos.")

console.log(typeof nome)
console.log(typeof idade)

// 2 - Mais sobre variáveis
// let 2teste = "inválido"
// let @teste = "inválido"
let a = 2,
b = 5,
c = 3
console.log(a, b, c)

const nomecompleto = "Fábio Simones"
const nomeCompleto = "Fábio Simones 2"
console.log(nomeCompleto)
console.log(nomecompleto)

let _teste = "ok"
let $teste = "ok"
console.log(_teste, $teste)

// 3 - Função de Prompt
//const age = prompt("Digite a sua idade: ")
//console.log(`Você tem ${age} anos`)

// 4 - Função de alerta
//alert("Testando")
//const z = 10;
//alert(`O número é ${z}`);

// 5 - Função Math.x
console.log(Math.max(5, 2, 1, 10))
console.log(Math.floor(5.14))
console.log(Math.ceil(5.14))

// 6 - Função console.x
console.log("Teste!")
console.error("Erro!")
console.warn("Aviso!")

// 7 - Estrutura If
const m = 10;
if(m > 5){
    console.log("M é maior que 5")
}

const user = "João"
if(user == "João"){
    console.log("Usuário logado!")
}

// 8 - Estrutura else

const loggedIn = false

if(loggedIn){
    console.log("Está autenticado")
}
else{
    console.log("Não está autenticado")
}

// 9 - Estrutura Else if
if(1 > 2){
    console.log("teste")
}
else if (2>3){
    console.log("Teste 2")
}
else if(5 > 1){
    console.log("Teste 3")
}

const userName = "Fábio"
const userAge = 27

if(userName === "José"){
    console.log("Bem vindo José")
}
else if(userName === "Fábio" && userAge === 27){
    console.log("Olá Fábio, você tem 27 anos.")
}
else{
    console.log("Nenhuma condição é válida.")
}

// 10 - Estruturas de repetição WHILE
let p = 0

while(p<5){
    console.log(`Repetindo ${p}`)
    p = p + 1
}

// 11 - do while
let o = 10
do{
    console.log(`Valor de o: ${o}`);
    o--;
}while(o>1);

// 12 - FOR
for(let t =0; t < 10; t++){
    console.log("Repetindo algo...")
}

// 13 - Identação
for(let u = 0; u < 10; u++){
    if(u*2 >10){
        console.log(`Maior que 10! ${u}`)
    }else{
        if(u/2 === 0){
            console.log("Deu 0")
        }
    }
}

// 14 - Break
for(let g = 20; g > 10; g--){
    console.log(`o valor de g é: ${g}`)
    if(g === 12){
        console.log("O g é 12")
        break;
    }
}

// 15 - Continue
for(s = 0; s < 10; s = s + 1){
    // operador resto = %
    if(s % 2 === 0){
        console.log("Número par!")
        continue
    }
    console.log(s);
}

// 16 - switch
const job = "Advogado"

switch(job){
    case "Programador":
        console.log("Você é um programador")
        break;
    case "Advogado":
        console.log("Você é um advogado")
        break;
    case "Engenheiro":
        console.log("Você é um engenheiro")
        break;
    default:
        console.log("Profissão não encontrada")
}

