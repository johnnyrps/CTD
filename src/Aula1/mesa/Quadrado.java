package Aula1.mesa;

public class Quadrado extends Figura {

    int  lado = 15;

    public Quadrado(int lado) {
        this.lado = lado;
    }

    public int getLado() {
        return lado;
    }

    public void setLado(int lado) {
        this.lado = lado;
    }

    @Override
    double calcularPerimetro() {
        return 4 * lado;
    }
}
