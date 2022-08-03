package Aula3;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class MainTest {

    Funcionario func1, func2;
    Afiliado af1, af2, af3;

    @BeforeEach
    public void doBefore(){
        func1 = new Funcionario("Johnny", 5);
        func1.vender(2);
        func2 = new Funcionario("Débora", 3);
        func2.vender(1);

        af1 = new Afiliado("Diego");
        af1.vender(4);

        af2 = new Afiliado("José");
        af2.vender(2);

        af3 = new Afiliado("Tadeu");
        af3.vender(1);

        func1.addAfiliado(af1);
    }

    @Test
    public void mostrarVendedores(){
        System.out.println(func1.mostrarCategoria());
        System.out.println(func2.mostrarCategoria());
        System.out.println(af1.mostrarCategoria());
        System.out.println(af2.mostrarCategoria());
        System.out.println(af3.mostrarCategoria());
    }
}
