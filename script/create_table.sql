CREATE table users (
usersid int NOT NULL AUTO_INCREMENT PRIMARY KEY,
username varchar(255),
passwords varchar(255),
timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chat(
chatID int NOT NULL AUTO_INCREMENT,
usersid int ,
chat_receive varchar(255),
chat_send varchar(255),
timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (chatID),
CONSTRAINT FK_chat_users FOREIGN KEY (usersid)
REFERENCES users(usersid)
);