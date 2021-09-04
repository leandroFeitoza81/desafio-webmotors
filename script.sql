DROP DATABASE IF EXISTS teste_webmotors;
CREATE DATABASE teste_webmotors;
CREATE TABLE teste_webmotors.tb_AnuncioWebmotors(
	ID INT NOT NULL AUTO_INCREMENT,
	marca VARCHAR(45) NOT NULL,
	modelo VARCHAR(45) NOT NULL,
	versao VARCHAR(45) NOT NULL,
	ano INT NOT NULL,
	quilometragem INT NOT NULL,
	observacao TEXT NOT NULL,
	PRIMARY KEY(ID)
);