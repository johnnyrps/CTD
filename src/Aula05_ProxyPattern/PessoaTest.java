package Aula05_ProxyPattern;

import org.junit.jupiter.api.Test;

import java.util.Date;

public class PessoaTest {

    Date data = new Date();

    @Test
    public void vacinar1(){
        Pessoa p1 = new Pessoa("Johnny", "Pecego", "1234567890", data, "CoronaVac");
        Vacinar vacinar = new ServicoVacinarProxy();

        vacinar.vacinarPessoa(p1.getNome(), p1.getDataVacina(), p1.getNomeVacina());
        System.out.println(p1.toString());
    }
}
