import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePlayerLeaguePointsTable1736375942743
  implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Criando a tabela player_leagues_points no MySQL com UUIDs
        await queryRunner.query(`
            CREATE TABLE player_leagues_points (
                id INT AUTO_INCREMENT PRIMARY KEY, -- ID único
                playerId VARCHAR(36) NOT NULL, -- ID do jogador como UUID
                leagueId VARCHAR(36) NOT NULL, -- ID da liga como UUID
                points INT DEFAULT 0, -- Somatória dos pontos do jogador na liga
                FOREIGN KEY (playerId) REFERENCES Players(id) ON DELETE CASCADE, -- Relacionamento com a tabela Players
                FOREIGN KEY (leagueId) REFERENCES Leagues(id) ON DELETE CASCADE, -- Relacionamento com a tabela Leagues
                UNIQUE(playerId, leagueId) -- Garantindo que um jogador só pode ter um registro por liga
            );
        `);

        // Criar o trigger após INSERT
        await queryRunner.query(`
            CREATE TRIGGER update_player_league_points
            AFTER INSERT ON predictions
            FOR EACH ROW
            BEGIN
                -- Atualiza os pontos totais de um jogador na liga
                DECLARE total_points INT;

                -- Soma os pontos do jogador na liga
                SELECT SUM(points) INTO total_points
                FROM predictions
                WHERE playerId = NEW.playerId AND leagueId = NEW.leagueId
                GROUP BY playerId, leagueId;

                -- Verifica se já existe um registro na tabela player_leagues_points
                IF EXISTS (SELECT 1 FROM player_leagues_points WHERE playerId = NEW.playerId AND leagueId = NEW.leagueId) THEN
                    -- Atualiza o total de pontos
                    UPDATE player_leagues_points
                    SET points = total_points
                    WHERE playerId = NEW.playerId AND leagueId = NEW.leagueId;
                ELSE
                    -- Cria um novo registro se não houver um
                    INSERT INTO player_leagues_points (playerId, leagueId, points)
                    VALUES (NEW.playerId, NEW.leagueId, total_points);
                END IF;
            END;
        `);

        // Criar o trigger após UPDATE
        await queryRunner.query(`
            CREATE TRIGGER update_player_league_points_after_update
            AFTER UPDATE ON predictions
            FOR EACH ROW
            BEGIN
                -- Atualiza os pontos totais de um jogador na liga
                DECLARE total_points INT;

                -- Soma os pontos do jogador na liga
                SELECT SUM(points) INTO total_points
                FROM predictions
                WHERE playerId = NEW.playerId AND leagueId = NEW.leagueId
                GROUP BY playerId, leagueId;

                -- Verifica se já existe um registro na tabela player_leagues_points
                IF EXISTS (SELECT 1 FROM player_leagues_points WHERE playerId = NEW.playerId AND leagueId = NEW.leagueId) THEN
                    -- Atualiza o total de pontos
                    UPDATE player_leagues_points
                    SET points = total_points
                    WHERE playerId = NEW.playerId AND leagueId = NEW.leagueId;
                ELSE
                    -- Cria um novo registro se não houver um
                    INSERT INTO player_leagues_points (playerId, leagueId, points)
                    VALUES (NEW.playerId, NEW.leagueId, total_points);
                END IF;
            END;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remover as triggers caso a migration seja revertida
        await queryRunner.query(`
            DROP TRIGGER IF EXISTS update_player_league_points;
        `);

        await queryRunner.query(`
            DROP TRIGGER IF EXISTS update_player_league_points_after_update;
        `);

        // Remover a tabela player_leagues_points caso a migration seja revertida
        await queryRunner.query(`
            DROP TABLE IF EXISTS player_leagues_points;
        `);
    }
}

