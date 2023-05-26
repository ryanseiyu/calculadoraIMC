"use strict";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var nomeAlunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos = nomeAlunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    nota: getRndInteger(5, 10)
  };
});
alunos.push({
  nome: 'Lucio',
  nota: 4
});
console.log(alunos);
var alunosAprovados = alunos.filter(function (aluno, nota) {
  return aluno.nota >= 6;
});
console.log(alunosAprovados);