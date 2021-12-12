const addCadastro = require('./moduloaluno');
const listaAlunos = require('./listaalunos');

const curso = {
    nomeCurso: 'CTD',
    notaAprovacao: 7,
    faltaMaxima: 5, 
    listaEstudantes: listaAlunos,
    adicionarAluno: function(nome, qtdFalta, notas){
      this.listaEstudantes.push(new addCadastro.cadastro(nome, qtdFalta, notas));
    },
    alunoPassou: function (objeto) {
        let falta = objeto.qtdFalta;
        let mediaAluno = addCadastro.calcularMedia(objeto.notas);
        
        if (mediaAluno >= this.notaAprovacao && falta < this.faltaMaxima) {
            return true;
        } else if (falta == this.faltaMaxima && mediaAluno > 1.1*this.notaAprovacao) {
            return true;
        } else {
            return false;
        }
    },
    listaAprovados: function () {
        let lista = [];
        for (let index = 0; index < this.listaEstudantes.length; index++) {
            lista.push(this.alunoPassou(this.listaEstudantes[index]));
        };
        return lista;
    },
}

curso.adicionarAluno("Debora", 5, [8,9,10]);
curso.adicionarAluno("Thiago", 2, [2,7,10]);

console.log (curso.alunoPassou(curso.listaEstudantes[3]));

console.log(curso.listaAprovados());