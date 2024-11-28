-- Crear Base de datos y Perfil de SQL --
create database if not exists proyecto_final_web2_base_data;
use proyecto_final_web2_base_data;
create table if not exists users(
	id int auto_increment not null,
    name varchar(70) not null,
    email varchar(100) not null,
    primary key (id)
);

create user if not exists 'web2'@'localhost' identified by '12345';
grant all privileges on node_crud_rmu.* to 'web2'@'localhost';

insert into users (name, email) value ('Emmanuel', 'emmanuelarteaga372@aragon.unam.mx');