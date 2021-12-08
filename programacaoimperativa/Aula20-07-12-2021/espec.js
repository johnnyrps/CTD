let espectadores = [];

function Espectador(idade,opiniao){
    this.idade = idade;
    this.opiniao = opiniao;
}

espectadores.push(new Espectador(17,'ótimo'));
espectadores.push(new Espectador(13,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(18,'ótimo'));
espectadores.push(new Espectador(22,'bom'));
espectadores.push(new Espectador(34,'ótimo'));
espectadores.push(new Espectador(50,'regular'));
espectadores.push(new Espectador(25,'bom'));
espectadores.push(new Espectador(30,'ótimo'));
espectadores.push(new Espectador(14,'regular'));
espectadores.push(new Espectador(21,'ótimo'));
espectadores.push(new Espectador(20,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(22,'ótimo'));
espectadores.push(new Espectador(23,'bom'));

// console.log(espectadores);
let opiniao = []
function qtdBom (espectadores) {
    return espectadores
      .filter((item) => {
        return item.opiniao === 3;
      }).length;
  }
  console.log(qtdBom());


// const opiniao3 = espectadores.filter(idade => idade.opiniao === 17);
// const media = opiniao3.reduce((acc, curr) => acc + curr.idade, 0) / opiniao3.length;
// console.log(`A média das idades dos espectadores que responderam ótimo é ${media}`);
// const opiniao1 = espectadores.filter(e => e.opiniao === 1).length;
// console.log(`A quantidade de espectadores que responderam regular é ${opiniao1}`);
// const opiniao2 = espectadores.filter(e => e.opiniao === 2).length;
// const porcentagem = Math.round((opiniao2 / espectadores.length) * 100, 2);
// console.log(`A porcentagem de espectadores que responderam bom é ${porcentagem}%`);