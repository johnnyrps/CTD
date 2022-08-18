package Avaliacao_Parc_BeckEndI.Filiais;

public class Filial {
    Integer id;
    String nomeFilial;
    String rua;
    int numero;
    String cidade;
    String estado;
    boolean ehCincoEstrelas;

    public Filial(Integer id, String nomeFilial, String rua, int numero,
                  String cidade, String estado, boolean ehCincoEstrelas) {
        this.id = id;
        this.nomeFilial = nomeFilial;
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.ehCincoEstrelas = ehCincoEstrelas;
    }

    public Filial(String nomeFilial, String rua, int numero, String cidade, String estado, boolean ehCincoEstrelas) {
        this.nomeFilial = nomeFilial;
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.ehCincoEstrelas = ehCincoEstrelas;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomeFilial() {
        return nomeFilial;
    }

    public void setNomeFilial(String nomeFilial) {
        this.nomeFilial = nomeFilial;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public boolean isEhCincoEstrelas() {
        return ehCincoEstrelas;
    }

    public void setEhCincoEstrelas(boolean ehCincoEstrelas) {
        this.ehCincoEstrelas = ehCincoEstrelas;
    }

    @Override
    public String toString() {
        return "Filial{" +
                "id=" + id +
                ", nomeFilial='" + nomeFilial + '\'' +
                ", rua='" + rua + '\'' +
                ", numero=" + numero +
                ", cidade='" + cidade + '\'' +
                ", estado='" + estado + '\'' +
                ", ehCincoEstrelas=" + ehCincoEstrelas +
                '}';
    }
}
