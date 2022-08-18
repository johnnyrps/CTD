package Avaliacao_Parc_BeckEndI.Filiais;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Logger;

public class FilialDaoH2 implements IDao<Filial>{

        private ConfiguracaoJDBC configuracaoJDBC;

        final static Logger log = Logger.getLogger(String.valueOf(FilialDaoH2.class));

        public FilialDaoH2(ConfiguracaoJDBC configuracaoJDBC) {
            this.configuracaoJDBC = configuracaoJDBC;
        }

        @Override
        public Filial salvar(Filial filial) {
            log.info("Cadastrando a filial: " + filial);
            Connection connection = configuracaoJDBC.getConnection();
            Statement statement;

            String query = String.format("INSERT INTO FILIAL(NOME, RUA, NUMERO, CIDADE, ESTADO, CLASSIFICACAO)" +
                    "VALUES('$s', '$s', '$s', '$s', '$s', '$s', '$s'", filial.getNomeFilial(), filial.getRua(), filial.getNumero(), filial.getCidade(), filial.getEstado(), filial.isEhCincoEstrelas());

            try {
                statement = connection.createStatement();
                statement.executeUpdate(query, Statement.RETURN_GENERATED_KEYS);
                ResultSet keys = statement.getGeneratedKeys();

                if(keys.next()) {
                    filial.setId(keys.getInt(1));
                    statement.close();
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return filial;
        }
    }

