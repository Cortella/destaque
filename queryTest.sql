INSERT INTO teams (id, name, shield, city, stadium, created_at)
VALUES 
('1', 'Cruzeiro', 'https://exemplo.com/escudo.png', 'Cidade Exemplo', 'Estádio Exemplo', NOW()),
('2', 'Atletico', 'https://exemplo.com/escudo.png', 'Cidade Exemplo', 'Estádio Exemplo', NOW()),
('3', 'América Mineiro', 'https://exemplo.com/america.png', 'Belo Horizonte', 'Independência', NOW()),
('4', 'Tombense', 'https://exemplo.com/tombense.png', 'Tombos', 'Estádio Antônio Guimarães de Almeida', NOW()),
('5', 'Caldense', 'https://exemplo.com/caldense.png', 'Poços de Caldas', 'Estádio Ronaldão', NOW()),
('6', 'Uberlândia', 'https://exemplo.com/uberlandia.png', 'Uberlândia', 'Estádio Parque do Sabiá', NOW()),
('7', 'URT', 'https://exemplo.com/urt.png', 'Patos de Minas', 'Estádio Zama Maciel', NOW()),
('8', 'Villa Nova', 'https://exemplo.com/villanova.png', 'Nova Lima', 'Estádio Castor Cifuentes', NOW()),
('9', 'Patrocinense', 'https://exemplo.com/patrocinense.png', 'Patrocínio', 'Estádio Pedro Alves do Nascimento', NOW()),
('10', 'Democrata-GV', 'https://exemplo.com/democrata.png', 'Governador Valadares', 'Estádio José Mammoud Abbas', NOW()),
('11', 'Pouso Alegre', 'https://exemplo.com/pousoalegre.png', 'Pouso Alegre', 'Estádio Manduzão', NOW()),
('12', 'Boa Esporte', 'https://exemplo.com/boaesporte.png', 'Varginha', 'Estádio Melão', NOW());

INSERT INTO tournaments (id, name, initialDate, finalDate, type, created_at)
VALUES (
  '1', -- UUID único
  'Campeonato Mineiro',                     -- Nome do torneio
  '2025-01-15',                           -- Data inicial
  '2025-02-15',                           -- Data final
  'knockout',                             -- Tipo do torneio
  NOW()                                   -- Data de criação
);

INSERT INTO rounds (id, tournamentId, roundNumber, initialDate, finalDate) VALUES
  ('1', '1', 1, '2025-01-15', '2025-01-16'),
  ('2', '1', 2, '2025-01-17', '2025-01-18'),
  ('3', '1', 3, '2025-01-19', '2025-01-20'),
  ('4', '1', 4, '2025-01-21', '2025-01-22'),
  ('5', '1', 5, '2025-01-23', '2025-01-24'),
  ('6', '1', 6, '2025-01-25', '2025-01-26'),
  ('7', '1', 7, '2025-01-27', '2025-01-28'),
  ('8', '1', 8, '2025-01-29', '2025-01-30'),
  ('9', '1', 9, '2025-02-01', '2025-02-02'),
  ('10', '1', 10, '2025-02-03', '2025-02-04'),
  ('11', '1', 11, '2025-02-05', '2025-02-06'),
  ('12', '1', 12, '2025-02-07', '2025-02-08')



INSERT INTO games (id, tournamentId, homeTeamId, awayTeamId, date, location, status, roundId)
VALUES 
  ('game1', '1', '1', '2','2025-01-15 16:00:00', 'Estádio Mineirão', 'scheduled', '1'),
  ('game2', '1','3', '4','2025-01-15 18:00:00', 'Estádio Independência', 'scheduled', '1'),
  ('game3',  '1','5', '6','2025-01-16 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', '1'),
  ('game4',  '1','7', '8','2025-01-16 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', '1'),
  ('game5',  '1','9', '10','2025-01-17 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', '1'),
  ('game6', '1','11', '12','2025-01-17 18:00:00', 'Estádio Manduzão', 'scheduled', '1')

-- Rodada 2
INSERT INTO games (id, tournamentId, homeTeamId, awayTeamId, date, location, status, roundId)
VALUES 
  ('game7', '1','1', '3', '2025-01-22 16:00:00', 'Estádio Mineirão', 'scheduled', '2'),
  ('game8', '1','2', '4', '2025-01-22 18:00:00', 'Estádio Independência', 'scheduled', '2'),
  ('game9', '1','5', '7', '2025-01-23 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', '2'),
  ('game10', '1','6', '8', '2025-01-23 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', '2'),
  ('game11', '1','9', '11', '2025-01-24 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', '2'),
  ('game12', '1','10', '12', '2025-01-24 18:00:00', 'Estádio Manduzão', 'scheduled', '2');

INSERT INTO games (id, tournamentId, homeTeamId, awayTeamId, date, location, status, roundId)
VALUES 
  ('game13', '1','1', '4', '2025-01-29 16:00:00', 'Estádio Mineirão', 'scheduled', '3'),
  ('game14', '1','2', '5', '2025-01-29 18:00:00', 'Estádio Independência', 'scheduled', '3'),
  ('game15', '1','3', '6', '2025-01-30 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', '3'),
  ('game16', '1','4', '7', '2025-01-30 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', '3'),
  ('game17', '1','5', '8', '2025-02-05 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', '3'),
  ('game18', '1','6', '9', '2025-02-05 18:00:00', 'Estádio Manduzão', 'scheduled', '3');

INSERT INTO games (id, tournamentId, homeTeamId, awayTeamId, date, location, status, roundId)
VALUES 
  ('game19', '1','1', '5', '2025-02-12 16:00:00', 'Estádio Mineirão', 'scheduled', '4'),
  ('game20', '1','2', '6', '2025-02-12 18:00:00', 'Estádio Independência', 'scheduled', '4'),
  ('game21', '1','3', '7', '2025-02-13 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', '4'),
  ('game22', '1','4', '8', '2025-02-13 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', '4'),
  ('game23', '1','5', '9', '2025-02-19 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', '4'),
  ('game24', '1','6', '10', '2025-02-19 18:00:00', 'Estádio Manduzão', 'scheduled', '4')

INSERT INTO games (id, tournamentId, homeTeamId, awayTeamId, date, location, status, roundId)
VALUES 
  ('game25', '1','1', '6', '2025-02-26 16:00:00', 'Estádio Mineirão', 'scheduled', '5'),
  ('game26', '1','2', '7', '2025-02-26 18:00:00', 'Estádio Independência', 'scheduled', '5'),
  ('game27', '1','3', '8', '2025-02-27 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', '5'),
  ('game28', '1','4', '9', '2025-02-27 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', '5'),
  ('game29', '1','5', '10', '2025-03-05 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', '5'),
  ('game30', '1','6', '11', '2025-03-05 18:00:00', 'Estádio Manduzão', 'scheduled', '5')

INSERT INTO games (id,  tournamentId, homeTeamId, awayTeamId, date, location, status, roundId)
VALUES 
  ('game31', '1','1', '7', '2025-03-12 16:00:00', 'Estádio Mineirão', 'scheduled', '6'),
  ('game32', '1','2', '8', '2025-03-12 18:00:00', 'Estádio Independência', 'scheduled', '6'),
  ('game33', '1','3', '9', '2025-03-13 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', '6'),
  ('game34', '1','4', '10', '2025-03-13 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', '6'),
  ('game35', '1','5', '11', '2025-03-19 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', '6'),
  ('game36', '1','6', '12', '2025-03-19 18:00:00', 'Estádio Manduzão', 'scheduled', '6')

INSERT INTO games (id, tournamentId, homeTeamId, awayTeamId, date, location, status, roundId)
VALUES 
  ('game37', '1','1', '8', '2025-03-26 16:00:00', 'Estádio Mineirão', 'scheduled', '7'),
  ('game38', '1','2', '9', '2025-03-26 18:00:00', 'Estádio Independência', 'scheduled', '7'),
  ('game39', '1','3', '10', '2025-03-27 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', '7'),
  ('game40', '1','4', '11', '2025-03-27 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', '7'),
  ('game41', '1','5', '12', '2025-04-02 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', '7'),
  ('game42', '1','6', '7', '2025-04-02 18:00:00', 'Estádio Manduzão', 'scheduled', '7')

INSERT INTO games (id, tournamentId, homeTeamId, awayTeamId, date, location, status, roundId)
VALUES 
  ('game43','1', '1', '9', '2025-04-09 16:00:00', 'Estádio Mineirão', 'scheduled', '8'),
  ('game44','1', '2', '10', '2025-04-09 18:00:00', 'Estádio Independência', 'scheduled', '8'),
  ('game45','1', '3', '11', '2025-04-10 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', '8'),
  ('game46', '1','4', '12', '2025-04-10 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', '8'),
  ('game47','1', '5', '6', '2025-04-16 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', '8'),
  ('game48', '1','7', '8', '2025-04-16 18:00:00', 'Estádio Manduzão', 'scheduled', '8')

INSERT INTO games (id, tournamentId, homeTeamId, awayTeamId, date, location, status, roundId)
VALUES 
  ('game49', '1','1', '10', '2025-04-23 16:00:00', 'Estádio Mineirão', 'scheduled', '9'),
  ('game50', '1','2', '11', '2025-04-23 18:00:00', 'Estádio Independência', 'scheduled', '9'),
  ('game51', '1','3', '12', '2025-04-24 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', '9'),
  ('game52', '1','4', '5', '2025-04-24 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', '9'),
  ('game53', '1','6', '7', '2025-04-30 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', '9'),
  ('game54', '1','8', '9', '2025-04-30 18:00:00', 'Estádio Manduzão', 'scheduled', '9')

INSERT INTO games (id, tournamentId, homeTeamId, awayTeamId, date, location, status, roundId)
VALUES 
  ('game55', '1','1', '11', '2025-05-07 16:00:00', 'Estádio Mineirão', 'scheduled', '10'),
  ('game56', '1','2', '12', '2025-05-07 18:00:00', 'Estádio Independência', 'scheduled', '10'),
  ('game57', '1','3', '5', '2025-05-08 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', '10'),
  ('game58', '1','4', '6', '2025-05-08 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', '10'),
  ('game59', '1','7', '9', '2025-05-14 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', '10'),
  ('game60', '1','8', '10', '2025-05-14 18:00:00', 'Estádio Manduzão', 'scheduled', '10')
INSERT INTO games (id, tournamentId, homeTeamId, awayTeamId, date, location, status, roundId)
VALUES 
  ('game61', '1','1', '12', '2025-05-21 16:00:00', 'Estádio Mineirão', 'scheduled', '11'),
  ('game62', '1','2', '3', '2025-05-21 18:00:00', 'Estádio Independência', 'scheduled', '11'),
  ('game63', '1','4', '5', '2025-05-22 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', '11'),
  ('game64', '1','6', '8', '2025-05-22 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', '11'),
  ('game65', '1','7', '10', '2025-05-28 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', '11'),
  ('game66', '1','9', '11', '2025-05-28 18:00:00', 'Estádio Manduzão', 'scheduled', '11');
 INSERT INTO games (id, tournamentId, homeTeamId, awayTeamId, date, location, status, roundId)
VALUES 
  ('game19', '1', '5', '2025-02-12 16:00:00', 'Estádio Mineirão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '4'),
  ('game20', '2', '6', '2025-02-12 18:00:00', 'Estádio Independência', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '4'),
  ('game21', '3', '7', '2025-02-13 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '4'),
  ('game22', '4', '8', '2025-02-13 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '4'),
  ('game23', '5', '9', '2025-02-19 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '4'),
  ('game24', '6', '10', '2025-02-19 18:00:00', 'Estádio Manduzão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '4'),
  ('game25', '1', '6', '2025-02-26 16:00:00', 'Estádio Mineirão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '5'),
  ('game26', '2', '7', '2025-02-26 18:00:00', 'Estádio Independência', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '5'),
  ('game27', '3', '8', '2025-02-27 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '5'),
  ('game28', '4', '9', '2025-02-27 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '5'),
  ('game29', '5', '10', '2025-03-05 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '5'),
  ('game30', '6', '11', '2025-03-05 18:00:00', 'Estádio Manduzão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '5'),
  ('game31', '1', '7', '2025-03-12 16:00:00', 'Estádio Mineirão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '6'),
  ('game32', '2', '8', '2025-03-12 18:00:00', 'Estádio Independência', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '6'),
  ('game33', '3', '9', '2025-03-13 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '6'),
  ('game34', '4', '10', '2025-03-13 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '6'),
  ('game35', '5', '11', '2025-03-19 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '6'),
  ('game36', '6', '12', '2025-03-19 18:00:00', 'Estádio Manduzão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '6'),
  ('game37', '1', '8', '2025-03-26 16:00:00', 'Estádio Mineirão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '7'),
  ('game38', '2', '9', '2025-03-26 18:00:00', 'Estádio Independência', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '7'),
  ('game39', '3', '10', '2025-03-27 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '7'),
  ('game40', '4', '11', '2025-03-27 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '7'),
  ('game41', '5', '12', '2025-04-02 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '7'),
  ('game42', '6', '7', '2025-04-02 18:00:00', 'Estádio Manduzão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '7'),
  ('game43', '1', '9', '2025-04-09 16:00:00', 'Estádio Mineirão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '8'),
  ('game44', '2', '10', '2025-04-09 18:00:00', 'Estádio Independência', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '8'),
  ('game45', '3', '11', '2025-04-10 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '8'),
  ('game46', '4', '12', '2025-04-10 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '8'),
  ('game47', '5', '6', '2025-04-16 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '8'),
  ('game48', '7', '8', '2025-04-16 18:00:00', 'Estádio Manduzão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '8'),
  ('game49', '1', '10', '2025-04-23 16:00:00', 'Estádio Mineirão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '9'),
  ('game50', '2', '11', '2025-04-23 18:00:00', 'Estádio Independência', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '9'),
  ('game51', '3', '12', '2025-04-24 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '9'),
  ('game52', '4', '5', '2025-04-24 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '9'),
  ('game53', '6', '7', '2025-04-30 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '9'),
  ('game54', '8', '9', '2025-04-30 18:00:00', 'Estádio Manduzão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '9'),
  ('game55', '1', '11', '2025-05-07 16:00:00', 'Estádio Mineirão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '10'),
  ('game56', '2', '12', '2025-05-07 18:00:00', 'Estádio Independência', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '10'),
  ('game57', '3', '5', '2025-05-08 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '10'),
  ('game58', '4', '6', '2025-05-08 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '10'),
  ('game59', '7', '9', '2025-05-14 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '10'),
  ('game60', '8', '10', '2025-05-14 18:00:00', 'Estádio Manduzão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '10'),
  ('game61', '1', '12', '2025-05-21 16:00:00', 'Estádio Mineirão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '11'),
  ('game62', '2', '3', '2025-05-21 18:00:00', 'Estádio Independência', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '11'),
  ('game63', '4', '5', '2025-05-22 16:00:00', 'Estádio Parque do Sabiá', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '11'),
  ('game64', '6', '8', '2025-05-22 18:00:00', 'Estádio Castor Cifuentes', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '11'),
  ('game65', '7', '10', '2025-05-28 16:00:00', 'Estádio José Mammoud Abbas', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '11'),
  ('game66', '9', '11', '2025-05-28 18:00:00', 'Estádio Manduzão', 'scheduled', 'c9d6f0c3-5b44-41b3-9a94-bf784efc8f3b', '11')


INSERT INTO leagues (id, name, isPublic, adminId, isOfficial, moderators, lastActivityDate, pointsPerFullHit, pointsPerResult,pointsPerTeamGoals, boostPerRound, year)
  VALUES
  ('1', 'cartomantes', 1,'6af79660-48af-4cde-8d44-3ba108443c6d', 0, NULL,'2025-05-14 18:00:00', 10, 5, 1,0, 2025)
