create table USERS (
	ID INT NOT NULL AUTO_INCREMENT,
	FIRSTNAME varchar(100) not null,
    LASTNAME varchar(100) not null,
    EMAIL varchar(100) not null,
    PASSWORD varchar(100) not null,
    PRIMARY KEY (`id`)
);

#--insert into users (firstname, lastname, email, password) values ("Kevin", "Jones", "kevin@rocksolidknowledge.com", "'$2a$10$8ddo6UbjZPO5qCeLuhILQeiqBKhhUXuSyxNVDD9P2vqcj2NJ2mnfe'")