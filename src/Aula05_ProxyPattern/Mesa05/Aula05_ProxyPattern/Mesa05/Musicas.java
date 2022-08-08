package Aula05_ProxyPattern.Mesa05;

public class Musicas {

    private String titulo;
    private String artista;

    public Musicas(String titulo, String artista) {
        this.titulo = titulo;
        this.artista = artista;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getArtista() {
        return artista;
    }

    public void setArtista(String artista) {
        this.artista = artista;
    }

    @Override
    public String toString() {
        return "Musicas{" +
                titulo + '\'' +
                "(do artista " + artista +")";
                }
    }

