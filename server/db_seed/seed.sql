DROP ROLE IF EXISTS flashcard_dev;

CREATE ROLE flashcard_dev LOGIN PASSWORD 'flashcard_password';

ALTER ROLE flashcard_dev WITH SUPERUSER;

DROP DATABASE flashcard_db;

CREATE DATABASE flashcard_db;

\c flashcard_db;

CREATE extension IF NOT EXISTS "uuid-ossp";

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