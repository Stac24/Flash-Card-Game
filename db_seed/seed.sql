DROP TABLE IF EXISTS app_user;

CREATE TABLE app_user (
  username varchar(45) NOT NULL,
  password varchar(450) NOT NULL,
  enabled integer NOT NULL DEFAULT '1',
  PRIMARY KEY (username)
);

INSERT INTO app_user (username, password)
VALUES ('alice', '123'), ('bob', '456');