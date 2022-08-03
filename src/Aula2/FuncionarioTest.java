package Aula2;

import org.junit.jupiter.api.Test;

public class FuncionarioTest {

    @Test
    void Calculos(){
        Funcionario funcionario = new Efetivo("Johnny", "Pecego", "321456", 10000.00, 1.00, 5000.00);
        funcionario.pagamentoSalario();
        funcionario = new Contratado("Issao", "Takeuchi", "421457", 15000.00, 40);
        funcionario.pagamentoSalario();
    }
}
