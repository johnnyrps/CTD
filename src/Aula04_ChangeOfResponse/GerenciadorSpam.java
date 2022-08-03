package Aula04_ChangeOfResponse;

public class GerenciadorSpam extends Gerenciador{

    @Override
    public void verificar(Mail email){ //faz a verificação do Destino e do Assunto a partir do meu gerenciador
        System.out.println("Marcado como Spam");
    }
}
