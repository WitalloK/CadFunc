CREATE DATABASE IF NOT EXISTS db_cadastrar;
USE db_cadastrar;

CREATE TABLE IF NOT EXISTS funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    cargo VARCHAR(100),
    salario DECIMAL(10,2)
);