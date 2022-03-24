DROP ROLE IF EXISTS flashcard_dev;

CREATE ROLE flashcard_dev LOGIN PASSWORD 'flashcard_password';

ALTER ROLE flashcard_dev WITH SUPERUSER;

DROP DATABASE flashcard_db;

CREATE DATABASE flashcard_db;

\c flashcard_db;

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    stars INTEGER DEFAULT 0,
    createdAt timestamp,
    updatedAt timestamp
);

INSERT INTO
    Users (email, password)
VALUES
    ('alice@gmail.com', '123123'),
    ('bob@gmail.com', '456456'),
    ('carol@gmail.com', 'asdasd'),
    ('dan@gmail.com', 'password123');

CREATE TABLE Cards (
    id SERIAL PRIMARY KEY,
    front VARCHAR(255),
    back VARCHAR(255),
    cardset VARCHAR(255),
    image_url VARCHAR(255),
    createdAt timestamp,
    updatedAt timestamp
);

INSERT INTO
    Cards (front, back, cardset)
VALUES
    ('What is the command for adding columns to a table?', 'ALTER TABLE', 'SQL'),
    ('What does RDBMS stand for?', 'RDBMS stands for Relational Database Management System', 'SQL'),
    ('Jumps out of a loop and start at the top', 'continue',  'JavaScript'),
    ('Terminates a switch or a loop', 'continue', 'JavaScript'),
    ('Executes a block of statements, and repeats the block, while a condition is true', 'do ... while', 'JavaScript'),
    ('What is the capital of California?', 'Sacramento', 'us-capitals'),
    ('What is the capital of New York?', 'New York City', 'us-capitals'),
    ('What is the capital of New Jersey?', 'Trenton', 'us-capitals'),
    ('What is the capital of Pennsylvania?', 'Philadelphia', 'us-capitals'),
    ('What is the capital of Alaska?', 'Juneau', 'us-capitals'),
    ('What is the capital of Nebraska?', 'Lincoln', 'us-capitals'),
    ('What is the capital of Ohio?', 'Columbus', 'us-capitals'),
    ('What is the capital of Oregon?', 'Salem', 'us-capitals');

INSERT INTO
    Cards (front, back, cardset, image_url)
VALUES
    ('What is the capital of Utah?', 'Salt Lake City', 'us-capitals', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Salt_Lake_City_montage_19_July_2011.jpg/800px-Salt_Lake_City_montage_19_July_2011.jpg'),
    ('What is the capital of Texas?', 'Austin', 'us-capitals', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Austin_August_2019_19_%28skyline_and_Lady_Bird_Lake%29.jpg/1280px-Austin_August_2019_19_%28skyline_and_Lady_Bird_Lake%29.jpg'),
    ('What is the capital of Hawaii?', 'Honolulu', 'us-capitals', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Downtown_Honolulu_from_P%C5%ABowaina_%28Punchbowl_Crater%29.jpg/1280px-Downtown_Honolulu_from_P%C5%ABowaina_%28Punchbowl_Crater%29.jpg');