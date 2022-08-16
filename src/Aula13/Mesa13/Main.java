package Aula13.Mesa13;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class Main {

    private static final String sqlCreate = "DROP TABLE IF EXISTS Dentista;"+ "CREATE TABLE Dentista"+ "("+ "matricula INT PRIMARY KEY,"+ "nome VARCHAR(100) NOT NULL,"+ "sobrenome VARCHAR(100) NOT NULL,"+ ");";
    private static final String sqlInsert = "INSERT INTO Dentista(matricula,nome,sobrenome) VALUES (?,?,?);";
    private static final String sqlUpdate = "UPDATE Dentista SET nome = ? WHERE matricula = ?;";

    public static void main(String[] args) throws Exception{

        Dentista dentista = new Dentista(01, "Johnny", "Pecego");

        Connection connection = null;
        try {
            connection = ConnectionDB.getConnection();
            Statement statement = connection.createStatement();

            PreparedStatement preparedStatement= connection.prepareStatement(sqlInsert);

            preparedStatement.setInt(1, dentista.getMatricula());
            preparedStatement.setString(2, dentista.getNome());
            preparedStatement.setString(3, dentista.getSobrenome());
            statement.execute(sqlCreate);

            connection.setAutoCommit(false);
            PreparedStatement preparedStatementUpdate = connection.prepareStatement(sqlUpdate);
            preparedStatementUpdate.setInt(1, 456);
            preparedStatementUpdate.setInt(2, dentista.getMatricula());
            preparedStatementUpdate.execute();
            connection.commit();
            connection.setAutoCommit(true);

            String sqlSelect = "SELECT * FROM dentista";
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(sqlSelect);
            while(resultSet.next()){
                System.out.println(resultSet.getInt("matricula") + " - " + resultSet.getString("Nome") + " - " + resultSet.getString("Sobrenome"));
            }

        }catch (Exception e){
            e.printStackTrace();
            connection.rollback();
        }finally {
            connection.close();

        }

    }

}
