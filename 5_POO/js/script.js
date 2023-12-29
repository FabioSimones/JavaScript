// 1 - Métodos
const animal ={
    nome:"Bob",
    latir: function(){
        console.log("Au au")
    }
};

console.log(animal.nome)
animal.latir();

// 2 - Aprofundando sobre métodos
const pessoa = {
    nome: "Fábio",
    getNome: function(){
        return this.nome;
    },
    setNome: function(novoNome){
        this.nome = novoNome
    }
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Joaquim");
console.log(pessoa.getNome());

// 3 - Prototype
const text = "asd";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool))

// 4 - Mais sobre Prototype
const myObject = {
    a: "b",
    patas: 4
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject === Object.prototype));

const mySecondObject = Object.create(myObject);
console.log(mySecondObject)
console.log(mySecondObject.a)

// 5 - Classes básicas
const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemão"
console.log(pastorAlemao);
console.log(pastorAlemao.patas);

// 6 - Função com classes
function criarCachorro(nome, raca){
    const cachorro = Object.create({})

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "Vira-lata");
console.log(bob);

const jack = criarCachorro("Jack", "Poodle");
console.log(jack);
console.log(Object.getPrototypeOf(jack));

// 7 - classes baseadas em funções
function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky");
console.log(Object.getPrototypeOf(husky));
console.log(husky);


// 8 - métodos na função construtora
Cachorro.prototype.uivar = function(){
    console.log("Auuuuuu!");
};

husky.uivar();

// 9 - Classes ES6
class CachorroClasse{
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
};

const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);
console.log(Object.getPrototypeOf(jeff));

// 10 - Mais sobre classes
class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelho");
console.log(scania)
scania.descreverCaminhao();

// 11 - Override
class Humano{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

const matheus = new Humano("Matheus", 31)
console.log(matheus)

Humano.prototype.idade = "Não definida";
console.log(matheus.idade)
console.log(Humano.prototype.idade)

// 12 - Symbols em classes
class Aviao{
    constructor(marca, turbinas){
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
Aviao.prototype[asas] = 2

const boeing = new Aviao("Boeing", 10);
console.log(boeing);
console.log(boeing[asas]);

// 13 - Getters e Setters
class Post{
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }
    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`;

    }
    set adicionarTags(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post ("Algum post", "É um post sobre programação");
console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programação, JavaScript, JS"
console.log(myPost)

// 14 - Heranças
class Mamifero{
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome){
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, "Shark")
console.log(shark)
console.log(shark.patas)

// 15 - InstanceOf
console.log(shark instanceof Lobo)
console.log(Lobo instanceof Mamifero)

console.log(new Lobo (4, "Teste") instanceof Mamifero)