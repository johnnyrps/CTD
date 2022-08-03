package Aula04_ChangeOfResponse;

public class GerenciadorTecnico extends Gerenciador {

    @Override
    public void verificar(Mail email){ //faz a verificação do Destino e do Assunto a partir do meu gerenciador
        if((email.getDestino().equalsIgnoreCase("tecnica@colmeia.com")) || (email.getAssunto().equalsIgnoreCase("Técnico")))
        {
            System.out.println("Enviando ao departamento Técnico");
        }
        else { //Verifico a próxima entrada e executo novamente o meu método Verificar
            if(this.getSeguinte()!=null)
            {//chamamos ao método o seguinte objeto
                this.getSeguinte().verificar(email);
            }
        }
    }
}
