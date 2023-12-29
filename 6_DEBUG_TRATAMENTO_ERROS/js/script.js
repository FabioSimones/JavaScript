// 1 - Strict 
//"use strict";
//opa = "teste";
//const undefined = 10;
//delete [].length 

// 2 - Depurando com console.log
let a = 1
let b = 2

if(a == 1){
    a = b + 2
}

console.log(a)

for(let i = 0; i < b; i++){
    a = a +2;
    console.log(a);
}

if(a > 5){
    a = 25;
}

console.log(a);

// 3 - debugger
// let c = 1
// let d = 2 
// if(c == 1){
//     c = d + 2;
// };
// debugger;
// for (let i = 0; i < d; i++){
//     c = c + 2;
// };
// debugger;

// 4 - tratamento de dados
function checkNumber(n){
    const result = Number(n)

    if(Number.isNaN(result)){
        console.log("Valor incorreto")
        return;
    }
    console.log("Valor correto")
    return result;
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("teste");

// 5 - Exception
// let x = 10;

// if(x != 11){
//     throw new Error("O valor de x não pode ser diferente de 11.");
// }

// 6 - try catch
try{
    const soma = x + y;
} catch (error){
    console.log(`Erro no programa: ${error}`);
}

// 7 - Finally
try{
    const value = checkNumber(10);
    if(!value){
        throw new Error("Valores inválidos");
    }
}catch (error){
    console.log(`Opa, aconteceu um erro: ${error}`);
}finally{
    console.log("O código foi executado!");
}

// 8 - Assertions
function checkArray(arr){
    if (arr.lenght === 0){
        throw new Error("O array precisa de um elemento")
    }else{
        console.log(`O array tem ${arr.lenght} elementos`);
    }
}
//checkArray([]);
checkArray([1,2,3]);