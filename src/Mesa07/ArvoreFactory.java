package Mesa07;

import java.util.HashMap;
import java.util.Map;

public class ArvoreFactory {

    private static Map<String, Arvore> floresta = new HashMap<>();

    public Arvore getArvore(int altura, int largura, String cor){
        String id = "Altura: "+altura+  " Largura: "+largura+ " Cor: "+cor;
        System.out.println(id);

        if(!floresta.containsKey(id)){
            floresta.put(id, new Arvore(altura, largura, cor));
            System.out.println("Árvore plantada com sucesso!");
            return floresta.get(id);
        }
        System.out.println("\nArvore Obtida!");
        return floresta.get(id);
    }
}
