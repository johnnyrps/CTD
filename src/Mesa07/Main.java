package Mesa07;


public class Main {
    public static void main(String[] args) {

        ArvoreFactory arvore = new ArvoreFactory();

        Arvore ornamental = arvore.getArvore(200, 400, "Verde");
        Arvore frutifera = arvore.getArvore(500, 300, "Vermelho");
        Arvore florifera = arvore.getArvore(100, 200, "Azul");
        Arvore florifera2 = arvore.getArvore(100, 200, "Azul");

        Runtime runtime = Runtime.getRuntime();
        System.out.println("Memória utilizada: " + (runtime.totalMemory() - runtime.freeMemory()) / (1024 * 1024));

    }

}
