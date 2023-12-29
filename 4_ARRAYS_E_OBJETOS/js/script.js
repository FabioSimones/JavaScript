// 1 - Listas
const listas = [0, 1, 2, 3, 4]

console.log(listas)
console.log(typeof listas)

//  1.2 Acessando elementos
const arr = ["a", "b", "c", "d", "e"]
console.log(arr[0])
console.log(arr[3])
console.log(arr[83])

//  2 -Propriedades
const numbers = [5, 3, 4]
console.log(numbers.length)

const myName = "Fábio"
console.log(myName.length)

// 3 - Métodos
const otherNumbers = [1, 2, 3]
const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

// 4 - Objects Literals
const person = {
    name : "Fábio",
    age: 29,
    job: "Desenvolvedor"
}

console.log(person)
console.log(person.name.length)

// 5 - Remover e criar propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000
};
console.log(car);
car.doors = 4;
console.log(car);

delete car.km;
console.log(car)

// 6 - Mais sobre objetos
const obj = {
    a: "teste",
    b: "true"
}

console.log(obj instanceof Object);

const obj2 = {
    c: []
}
Object.assign(obj2 , obj)
console.log(obj2)

// 7 - Conhecendo melhor objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.entries(obj2))


// 8 - Mutação
const a = {
    name: "Fábio"
}

const b = a;
console.log(a)
console.log(b)

a.age = 31;

console.log(a)
console.log(b)

delete b.age;

console.log(a)
console.log(b)

// 9 - Loops em arrays
const users = ["Matheus", "João", "Lucas", "Fábio"]
for (let i = 0; i< users.length; i++){
    console.log(`Listando o usuário: ${users} `)
}

// 10 - Push e pop
const array = ["a", "b", "c"]
array.push("d")

console.log(array)
array.pop()
console.log(array)

const itemRemovido = array.pop();
console.log(itemRemovido)
console.log(array)

array.push("x", "y", "z");
console.log(array);

// 11 - Shift e Unshift
const letters = ["a", "b", "c"];
const letter = letters.shift();
console.log(letter);
console.log(letters);

letters.unshift("p", "q", "r");
letters.unshift("z");
console.log(letters)

// 12 - Indexof e lastIndexOf
const myElements = ["morango", "maçã", "abacate", "pera", "abacate"]

console.log(myElements.indexOf("morango"))
console.log(myElements.indexOf("abacate"))

console.log(myElements[2])
console.log(myElements[myElements.indexOf("abacate")])

console.log(myElements.lastIndexOf("abacate"))
console.log(myElements.lastIndexOf("mamão"))
console.log(myElements.indexOf("mamão"))

// 13 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];
const subArray = testeSlice.slice(2, 4);
console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3)

const subArray4 = testeSlice.slice(2);
console.log(subArray4)

//  14 - forEach
const nums = [1, 2, 3, 4, 5]
nums.forEach((numero) => {
    console.log(`o número é ${numero}`)
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`);
});

// 15 - Includes
const brands = ["BMW", "VW", "Fiat"];
console.log(brands.includes("Fiat"));
console.log(brands.includes("Kia"));

if (brands.includes("BMW")){
    console.log("Há carros da marca BMW!")
};

// 16 - Reverse
const reverseTeste = [1, 2, 3, 4, 5];
reverseTeste.reverse();
console.log(reverseTeste);

// 17 - Trim
const trimTest = "testando \n ";
console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length)
console.log(trimTest.trim().length)

// 18 - padStart
const testePadStart = "1";
const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");
console.log(testePadEnd);

// 19 - Split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

// 20 - Join
const fraseDeNovo = arrayDaFrase.join(" ");
console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`
console.log(fraseDeCompra)

// 21 - Repeat
const palavra = "Testando "
console.log(palavra.repeat(5))

// 22 - rest operator

const somaInfinita = (...args) => {
    let total = 0

    for (let i=0; i<args.length; i++){
        total += args[i]
    }
    return total;
};
console.log(somaInfinita(1, 2, 3))
console.log(somaInfinita(10, 25, 34))

// 23 - for of
const somaInfinita2 = (...args) => {
    let total = 0

    for(num of args){
        total += num;
    }
    return total;
};
console.log(somaInfinita2(1, 2, 3))
console.log(somaInfinita2(1, 2, 3, 15, 28, 33, 152))

// 24 - destructuring em objetos
const userDetails = {
    firstName: "Fábio",
    lastName: "Simones",
    age: "29 anos",
}
const{firstName, lastName, age} = userDetails;
console.log(firstName, lastName, age)

const{firstName: primeiroNome} = userDetails;
console.log(firstName)

// 25 - Destructuring em arrays
const myList = ["Avião", "Submarino", "Carro"];
const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 26 - JSON
const myJSon = '{"name": "Fábio", "age": 29, "skills": ["C#", "HTML", "CSS"]}'

// 27 - JSon para objetos e objetos para JSon
const myObject = JSON.parse(myJSon);
console.log(myObject)
console.log(myObject.name)

//json inválido
// const badJSon = '{"name": Fábio, "age": 29, "skills": ["C#", "HTML", "CSS"]}'
// const myObject2 = JSON.parse(badJSon);
// console.log(myObject2)

myObject.IsOpenToWork = true;
console.log(myObject);

const myNewJSon = JSON.stringify(myObject)
console.log(myNewJSon)
console.log(typeof myNewJSon)

// 