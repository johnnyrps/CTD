package Aula06_IntegradoraII;

public interface IGradeDeFilmes {

    public Filme getFilme(String nomeDoFilme) throws FilmeNaoHabilitadoException;
}
