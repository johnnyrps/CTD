package Aula19_Serealize.mesa19;

import java.io.*;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<Contatos> novoNew= new ArrayList<>();

        Contatos c1,c2,c3,c4;
        c1 = new Contatos("Arlindo", "arlindo@arlindo.com","0000000");
        c2 = new Contatos("Yudi Tamashiro", "bomdia&cia@sbt.com", "4002 8922");
        c3 = new Contatos("EU", "eu@gmail.com", "123456789");
        c4 = new Contatos("Eu mesmo e irene", "eueirene@gmail.com", "9638527412");

        novoNew.add(c1);
        novoNew.add(c2);
        novoNew.add(c3);
        novoNew.add(c4);

        FileOutputStream fo = null;

        try{
            fo = new FileOutputStream("qualquernome.txt");
            ObjectOutputStream saida = new ObjectOutputStream(fo);
            saida.writeObject(novoNew);  //passando minha lista
            saida.close();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        //criando arraylist para utilziar para ler o arquivo

        ArrayList<Contatos> lerArquivo = null;
        FileInputStream entrada = null;
        try{
            entrada = new FileInputStream("qualquernome.txt");
            ObjectInputStream leitura = new ObjectInputStream(entrada);
            lerArquivo = (ArrayList<Contatos>) leitura.readObject();
            for (Contatos n: lerArquivo) {
                System.out.println(n.toString());
            }
            leitura.close();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}
