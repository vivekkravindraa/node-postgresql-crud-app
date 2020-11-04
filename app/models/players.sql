CREATE TABLE players (
    pid SERIAL PRIMARY KEY,
    player_name VARCHAR(255) UNIQUE,
    player_email VARCHAR(255),
    date_created DATE
);

INSERT INTO players (name, surname, dob)
VALUES ('Name1','Surname1','01-01-1971'),
('Name2','Surname2','01-02-1971'),
('Name3','Surname3','01-03-1971'),
('Name4','Surname4','01-04-1971'),
('Name5','Surname5','01-05-1971'),
('Name6','Surname6','01-06-1971'),
('Name7','Surname7','01-07-1971'),
('Name8','Surname8','01-08-1971'),
('Name9','Surname9','01-09-1971'),
('Name10','Surname10','01-10-1971'),
('Name11','Surname11','01-11-1971');
