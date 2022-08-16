package Aula09_IntegradoraIII;

import org.junit.jupiter.api.Test;

import static org.junit.Assert.assertEquals;

public class FlyweightFactoryTest {

    @Test
    void getTrianguloComTamanho(){
        Triangulo triangulo = FlyweightFactory.obterTriangulo("Vermelho");
        triangulo.setTamanho(2);

        Triangulo triangulo1 = FlyweightFactory.obterTriangulo("Vermelho");
        triangulo.setTamanho(4);

        Triangulo triangulo2 = FlyweightFactory.obterTriangulo("Azul");
        triangulo.setTamanho(5);

        assertEquals(triangulo.getCor(), "Vermelho");
        assertEquals(triangulo1.getTamanho(), 4);
        assertEquals(FlyweightFactory.trianguloMap.size()==1, true );

    }
}
