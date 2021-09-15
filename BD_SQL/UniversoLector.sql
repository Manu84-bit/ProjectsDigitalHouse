CREATE SCHEMA UniversoLector;
USE UniversoLector;
CREATE table Socio (
Codigo int not null primary key,
DNI int,
Apellido varchar(100),
Nombres varchar(100),
Direccion varchar(200),
Localidad varchar(100)
);

CREATE table Editorial (
Codigo_editorial int not null,
Razon_social varchar(100),
Telefono varchar(100),
PRIMARY KEY (Codigo_editorial)
);

explain Editorial;

CREATE table Autor (
codigo_autor int not null primary key,
Apellido varchar(100),
Nombre varchar(100)
);

explain Autor;

CREATE table TelefonoxSocio (
codigo_tel int not null primary key,
Nro_telefono varchar(100),
Codigo_socio int,
CONSTRAINT FKSocioTelefono foreign key (Codigo_socio)
REFERENCES Socio (Codigo)
);

explain TelefonoxSocio;

create table Prestamo (
codigo_prestamo int not null primary key,
fecha datetime,
fecha_Devolucion date,
fecha_Tope date,
Codigo_socio int,
CONSTRAINT FKSocioPrestamo foreign key (Codigo_socio)
REFERENCES Socio (Codigo)
);

explain Prestamo;

create table Libro (
Codigo_libro int not null primary key,
ISBN varchar(13),
Titulo varchar(200),
Anio_Escritura date,
Anio_Edicion date,
codigo_autor int,
codigo_editorial int,
constraint FKAutorLibro foreign key (codigo_autor)
	references Autor (codigo_autor),
constraint FKEditorialLibro foreign key (Codigo_editorial )
	references Editorial (Codigo_editorial)
);

explain Libro;

create table volumen (
codigo_volumen int not null primary key,
deteriorado smallint(1),
Codigo_libro int,
constraint FKLibroVolumen foreign key (Codigo_libro)
	references Libro (Codigo_libro)
);

explain volumen;

create table PrestamosxVolumen (
codigo_PV int not null primary key,
codigo_volumen int,
codigo_prestamo int,
constraint FKPVolVolumen foreign key (codigo_volumen)
	references volumen (codigo_volumen),
constraint FKPVolPrestamo foreign key (codigo_prestamo)
	references Prestamo (codigo_prestamo)
);

insert into Socio values
(1,3000000,"JOHNSON", "PATRICIA", "28 MySQL Boulevard", "QLD"),
(2,2988800, "WILLIAMS", "LINDA", "23 Workhaven Lane", "Alberta"),
(3,2500000,"JONES", "BARBARA", "1411 Lillydale Drive", "QLD"),
(4,32980002,"BUTLER", "LOUIS", "1688 Okara Way", "Nothwest Border Prov"),
(5,2313909,"HAYES", "ROBIN","262 A Corua (La Corua) Parkway","Dhaka");

select * FROM socio;

insert into telefonoxsocio values 
(1,	"54911-45636453",1),
(2,	"54-11-47867654",1),
(3,	"11498-2173",2),
(4,	"11684736",	3),
(5,	"(54)-(911)-423-2434",4);

select * FROM telefonoxsocio;
delete from telefonoxsocio where codigo_socio = 4;
delete from socio where codigo = 4;
update socio set Direccion = "Monroe 860" where Codigo = 3;

insert into autor values 
(1, "Rowling", "J.K");

insert into editorial values 
(4, "Editorial Salamandra","011-239-2343");

insert into libro values 
(1,	"9781907545009", "Harry Potter y la piedra filosofal",	"1997-01-02",	"1997-01-04", 1,	4),
(2,	"9789878000114", "Harry Potter Y La Camara Secreta", 	"2020-05-08",	"2020-08-05", 1,	4);	

insert into volumen values 
(1,	0,	1),	
(2,	0,	1);	

select * from libro;
