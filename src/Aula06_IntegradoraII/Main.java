package Aula06_IntegradoraII;

public class Main {
    public static void main(String[] args) {

        GradeDeFilmesProxy proxy = new GradeDeFilmesProxy(new GradeDeFilmes());
        proxy.setIp(new Ip(250, 30, 33, 34));

        try {
            System.out.println(proxy.getFilme("The White Tiger").getLink());
            System.out.println("Acesso do filme liberado!!!");
        }
        catch (FilmeNaoHabilitadoException e){
            System.out.println(e);
        }
    }
}
