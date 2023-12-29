// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Operadores aritméticos
console.log(2+4);
console.log(10-5);
console.log(10/5);
console.log(10*5);
console.log(5+4*2);

// 3 - Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

// 4 - Strings
console.log("Este é um texto");
console.log('Mais um texto');
console.log("Outro texto");
console.log(typeof "Este é um texto");
console.log(typeof 'Mais um texto');

// 5 - Caracteres especiais em strings
console.log("Testando a \nquebra de linha.");
console.log("Espaçamento de \t tab.");

// 6 - Concatenação
console.log("Meu"+" Texto "+"Combinado");
console.log('Testando'+' com '+'crase');

// 7 - Template string
console.log(`A soma de 2+2 é: ${2+2}`);
console.log(`Podemos colocar qualquer coisa aqui ${console.log("Teste")}`);

// 8 - Booleanos
console.log(true)
console.log(false)
console.log(typeof false)
console.log(5>20)
console.log(50>20)

// 9 - Comparação
console.log(5<=5);
console.log(10==10);
console.log(9<9);

// 10 - Idênticos
console.log(9 == "9")
console.log(9 === "9")
console.log(9 != "9")
console.log(9 !== "9")

// 11 - Operadores lógicos
console.log(true && true)
console.log(true && false)
console.log(5>2 && 2<10)
console.log(5>2 && "Matheus" === 1)
console.log(5>2 || "Matheus" === 1)
console.log(5<2 || "Matheus" === 1)
console.log(!true)
console.log(!5>2)

// 12 - Empty values
console.log(typeof null, typeof undefined)
console.log(null === undefined)
console.log(null == undefined)
console.log(null == false)
console.log(undefined == false)

// 13 - Mudança de tipos
console.log(5*null)
console.log("teste" * "opa")
console.log("10" + 1)
console.log("10" - 1)
