DROP ROLE IF EXISTS flashcard_dev;

CREATE ROLE flashcard_dev LOGIN PASSWORD 'flashcard_password';

ALTER ROLE flashcard_dev WITH SUPERUSER;

DROP DATABASE flashcard_db;

CREATE DATABASE flashcard_db;

\c flashcard_db;

CREATE TABLE Users (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    stars INTEGER DEFAULT 0,
    gems INTEGER DEFAULT 0,
    createdAt timestamp,
    updatedAt timestamp
);

INSERT INTO
    Users (name, email, password, stars)
VALUES
    ('Alice','alice@gmail.com', '123123', 10),
    ('Bob','bob@gmail.com', '456456', 5),
    ('Carol','carol@gmail.com', 'asdasd', 4),
    ('Dan','dan@gmail.com', 'password123', 2),
    ('Edgar','edgar@gmail.com', 'password456', 1),
    ('Frodo','frodo@gmail.com', 'password789', 5),
    ('Gandalf','gandalf@gmail.com', 'greywizard', 0),
    ('Horace','horace@gmail.com', 'mypwd', 2),
    ('Iris','iris@gmail.com', 'iris', 1),
    ('Jon','jon@gmail.com', '1221', 1);

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
    ('What is the keyword to sort data in ascending order?', 'ASC keyword', 'SQL'),
    ('What is the keyword to select data from a table in SQL?', 'SELECT keyword', 'SQL'),
    ('What does SQL stand for?', 'Structured Query Language', 'SQL'),
    ('What is ECMAScript', 'ECMAScript is a Standard for a scripting languages. It provides the specifications for languages like Javascript and Jscript.',  'JavaScript'),
    ('What is Just-In-Time compilation', 'Just in time compilation means the code is converted to machine code all at once and then executed immediately such that there is no portable file like in Java.',  'JavaScript'),
    ('What are JavaScript primitive data types', 'A primitive data type is data that isnt an object and has no methods. i.e. Number Null Undefined Boolean BigInt String Symbol',  'JavaScript'),
    ('What is dynamic typing', 'Dynamic typing means that you dont need to specify what type the variable is, in contrast to a statically typed language.',  'JavaScript'),
    ('What is immutability?', 'Immutability means something cannot change once they are created.',  'JavaScript'),
    ('Jumps out of a loop and start at the top', 'continue',  'JavaScript'),
    ('Terminates a switch or a loop', 'break', 'JavaScript'),
    ('What is the difference between Set and array', 'Set can only contain unique values of any type; array is a 0 indexed list of values, which can be accessed by their index.', 'JavaScript'),
    ('What are 3 ways to declare a function in JavaScript', '1. Function declaration 2. Function expression 3. Arrow Function (ES6)', 'JavaScript'),
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