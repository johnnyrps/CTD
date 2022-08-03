package Aula3;

import java.util.ArrayList;

public class Funcionario extends Vendedor {

    private int anosAntiguidade;
    private ArrayList<Vendedor> afiliados = new ArrayList<>();

    public Funcionario(String nome, int anosAntiguidade) {
        super.nome = nome;
        super.pontosVenda = 5;
        this.anosAntiguidade = anosAntiguidade;
    }

    //Agregar um afiliado ao funcionário e por sua vez soma os pontos.
    public void addAfiliado(Vendedor afiliado){
        this.afiliados.add(afiliado);
        System.out.println(afiliado.nome+" Agora é afiliado de "+super.nome);
    }

    //Implementação do método abstrato
    //Por ano de antiguidade(tempo de casa), obtem 5 pontos, por cada afiliado obtem 10 pontos.

    @Override
    public int calcularPontos(){
        return (this.afiliados.size()*10)+(this.anosAntiguidade*5);
    }
}
