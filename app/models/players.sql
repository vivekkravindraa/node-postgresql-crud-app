CREATE TABLE players (
    pid SERIAL PRIMARY KEY,
    player_name VARCHAR(255) UNIQUE,
    player_surname VARCHAR(255) UNIQUE
);

INSERT INTO players (player_name, player_surname)
VALUES ('Name1','Surname1'),
('Name2','Surname2'),
('Name3','Surname3'),
('Name4','Surname4'),
('Name5','Surname5'),
('Name6','Surname6'),
('Name7','Surname7'),
('Name8','Surname8'),
('Name9','Surname9'),
('Name10','Surname10'),
('Name11','Surname11');
