package Avaliacao_Parc_BeckEndI.Filiais;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class FilialServiceTest {
    FilialService filialService;

    @BeforeEach
    void doBefore() {
        //filialService = new FilialService(new FilialDaoH2(new ConfiguracaoJDBC()));
        filialService = new FilialService(new FilialDaoH2(new ConfiguracaoJDBC()));
    }

    @Test
    public void cadastrarFilial() {
        Filial filial = new Filial("Filial00", "Porto Alegre",10, "Porto Alegre", "RS", true);
        filialService.salvar(filial);
        assertNotNull(filial.getId());

        Filial filial1 = new Filial("filial01", "Assis Brasil", 65, "Porto Alegre", "RS", false);
        filialService.salvar(filial);
        assertNotNull(filial.getId());

        Filial filial2 = new Filial("filial02", "Paraguassu", 3, "Capão da Canoa", "RS", false);
        filialService.salvar(filial);
        assertNotNull(filial.getId());

        Filial filial3 = new Filial("filial03", "João Pereira de Vargas", 1437, "Sapucaia do Sul", "RS", true);
        filialService.salvar(filial);
        assertNotNull(filial.getId());

        Filial filial4 = new Filial("filial04", "Pinto Bandeira", 33, "Porto Alegre", "RS", false);
        filialService.salvar(filial);
        assertNotNull(filial.getId());
    }


}
