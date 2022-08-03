package Aula04_ChangeOfResponse;

public class MailTest {

    public static void main(String[] args) {
        CheckMail processo = new CheckMail();

        processo.verificar(new Mail("email@email.com", "tecnica@digitalhouse.com", "Reclamação"));
        processo.verificar(new Mail("email@email.com", "defeito@digitalhouse.com", "Técnico"));
        processo.verificar(new Mail("email@email.com", "gerencia@colmeia.com", "Teste"));
        processo.verificar(new Mail("email@email.com", "comercial@colmeia.com", "Comercial"));
    }
}
