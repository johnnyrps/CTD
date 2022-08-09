package Aula08_FacadePattern;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.Assert.assertEquals;

public class FacadeDescontoTest {

    private FacadeDesconto facadeDesconto = new FacadeDesconto();

    private Cartao cartao;
    private Produto produto;

    @BeforeEach
    void doBefore(){
        cartao = new Cartao("1239485743293202","Star Bank");
        produto = new Produto("ervilhas","Lata");
    }

    @Test
    void validarDescontoBancoTest(){
        produto.setTipo("Enlatado");

        int desconto = facadeDesconto.desconto(cartao, produto, 1);
        assertEquals(20, desconto);
    }

    void validarDescontoProdutoTest(){
        cartao.setBanco("Oto Banco");

        int desconto = facadeDesconto.desconto(cartao, produto, 1);
        assertEquals(10, desconto);
    }

    @Test
    void validarDescontoQuantidadeTest(){
        produto.setTipo("Enlatado");
        cartao.setBanco("Oto Banco");

        int desconto = facadeDesconto.desconto(cartao, produto, 12);
        assertEquals(15, desconto);
    }

    @Test
    void validarDescontoTotalTest(){

        int desconto = facadeDesconto.desconto(cartao, produto, 12);
        assertEquals(45, desconto);
    }
}
