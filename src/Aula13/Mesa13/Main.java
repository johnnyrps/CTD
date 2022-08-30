package Aula13.Mesa13;

import java.sql.*;

public class Main {

    private static final String sqlCreate = "DROP TABLE IF EXISTS dentista; CREATE TABLE dentista (matricula INT PRIMARY KEY, nome VARCHAR(100) NOT NULL, sobrenome VARCHAR(100) NOT NULL);";
    private static final String sqlInsert = "INSERT INTO dentista(matricula,nome,sobrenome) VALUES (?,?,?);";
    private static final String sqlUpdate = "UPDATE dentista SET nome = ? WHERE matricula = ?;";
    public static String selectDentistaAllSql = "select * from dentista";
    public static String truncateDentistaSql = "truncate table dentista";

    public static void main(String[] args) throws Exception{

        Dentista dentista = new Dentista(01, "Johnny", "Pecego");

        Connection connection = null;
        try {
            connection = ConnectionDB.getConnection();

            connection.createStatement().execute(sqlCreate);
            PreparedStatement insertDentistaPreparedStatement = connection.prepareStatement(sqlInsert);
            insertDentistaPreparedStatement.setInt(1, dentista.getMatricula());
            insertDentistaPreparedStatement.setString(2, dentista.getNome());
            insertDentistaPreparedStatement.setString(3, dentista.getSobrenome());
            insertDentistaPreparedStatement.execute();

            System.out.println("Todos os dentistas:");
            PreparedStatement allDentistaStatement = connection.prepareStatement(selectDentistaAllSql);
            allDentistaStatement.execute();
            ResultSet allDentistaResultSet = allDentistaStatement.getResultSet();
            while (allDentistaResultSet.next()) {
                System.out.println(allDentistaResultSet.getInt("matricula:") + " " + allDentistaResultSet.getString("nome:") + " " + allDentistaResultSet.getString("sobrenome:"));
            }

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

            System.out.println("Todos os dentistas");
            allDentistaStatement.execute();
            allDentistaResultSet = allDentistaStatement.getResultSet();
            while (allDentistaResultSet.next()) {
                System.out.println(allDentistaResultSet.getInt("matricula:") + " " + allDentistaResultSet.getString("nome:") + " " + allDentistaResultSet.getString("sobrenome"));
            }

            connection.setAutoCommit(true);

            String sqlSelect = "SELECT * FROM dentista";
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(sqlSelect);
            while(resultSet.next()){
                System.out.println(resultSet.getInt("matricula") + " - " + resultSet.getString("nome") + " - " + resultSet.getString("sobrenome"));
            }

            connection.createStatement().execute(truncateDentistaSql);

        }catch (Exception e){
            e.printStackTrace();
            connection.rollback();
        }finally {
            connection.close();

        }

    }
    public static Connection getConnection() {
        try {
            return DriverManager.getConnection("jdbc:h2:~/test","sa","");
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    public static String getAllDentista() throws SQLException {
        Connection connection = getConnection();
        String allDentista = "";

        try {
            PreparedStatement allDentistaStatement = connection.prepareStatement(selectDentistaAllSql);
            allDentistaStatement.execute();
            ResultSet allDentistsResultSet = allDentistaStatement.getResultSet();
            allDentistaStatement.close();
            while (allDentistsResultSet.next()) {
                allDentista = allDentistsResultSet.getInt("matricula:") + " " + allDentistsResultSet.getString("nome") + " " + allDentistsResultSet.getString("sobrenome") + "\n";
            }
            return allDentista;
        } catch (Exception e) {
            e.printStackTrace();
            connection.rollback();
            throw new RuntimeException(e);
        } finally {
            connection.close();
        }
    }
}
