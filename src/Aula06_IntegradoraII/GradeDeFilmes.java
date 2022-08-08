package Aula06_IntegradoraII;

public class GradeDeFilmes implements IGradeDeFilmes {

    @Override
    public Filme getFilme(String nomeDoFilme){
        Filme f = null;

        switch(nomeDoFilme){
            case "The White Tiger":
                f = new Filme("The White Tiger", "ARG", "www.tiger.com");
                break;
            case "His Houser":
                f = new Filme("His Houser", "BRA", "www.hhouser.com");
                break;
            case "The Jurassic World":
                f = new Filme("The Jurassic World", "COL", "www.thejurassicworld.com");
                break;
            case "Avatar":
                f = new Filme("Avatar", "BRA", "www.avatar.com.br");
                break;
            case "Superbad":
                f = new Filme("Superbad", "ARG", "www.sbad.com");
                break;
        }
        return f;
    }

}
