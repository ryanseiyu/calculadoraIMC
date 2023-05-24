function Animal(nomeCientifico) {
    let _nomeCientifico = nomeCientifico;

    this.getNomeCientifico = function() {
        return _nomeCientifico;
    }
    this.setNomeCientifico = function(nomeCorreto) {
        _nomeCientifico = nomeCorreto;
    }
}

function Mamifero(nomeCientifico, classe) {
    this.classe = classe;

    Animal.call(this, nomeCientifico);

    this.rugido = function() {
        console.log("Sou um " + this.getNomeCientifico());
    }
}

function Pessoa(nomeCientifico, classe, nome) {
    this.nome = nome;

    this.rugido = function() {
        console.log("Sou um " + this.getNomeCientifico());
    }

    Mamifero.call(this, nomeCientifico, classe);
}

const animal = new Animal("Homo Sapiens");
const humanos = new Mamifero(animal.getNomeCientifico(), "Primates");
const pessoa = new Pessoa(animal.getNomeCientifico(), "Primates", "Ryan");
pessoa.setNomeCientifico("Homo Homo Sapiens");

console.log(animal.getNomeCientifico());
humanos.rugido();
pessoa.rugido();
