package Aula3;

public class Afiliado extends Vendedor{

    public Afiliado(String nome){
        super.nome = nome;
        super.pontosVenda = 15;
    }

    @Override
    public int calcularPontos(){
        return this.vendas * pontosVenda;
    }
}
