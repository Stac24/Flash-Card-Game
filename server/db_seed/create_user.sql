DROP ROLE IF EXISTS flashcard;

CREATE ROLE flashcard LOGIN PASSWORD 'flashcard';

CREATE DATABASE flashcard;

\c flashcard;