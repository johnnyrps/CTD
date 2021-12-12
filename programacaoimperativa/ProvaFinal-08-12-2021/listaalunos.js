let cadastro2 = require('./moduloaluno');

    let listaAlunos = [];

    listaAlunos.push(new cadastro2.cadastro('Johnny',0, [9, 10, 10]));
    listaAlunos.push(new cadastro2.cadastro('Lucas',3, [10, 9.75, 10]));
    listaAlunos.push(new cadastro2.cadastro('Jadson',1, [10, 10, 10]));
    listaAlunos.push(new cadastro2.cadastro('Katy',3, [8, 7, 10]));
    listaAlunos.push(new cadastro2.cadastro('Pedro',1, [8, 8, 7]));

    module.exports = listaAlunos