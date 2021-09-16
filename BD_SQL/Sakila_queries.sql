use sakila;
SELECT * from address;
select * from actor;

select * from category;

#1. Obtener el nombre y apellido de los primeros 5 actores disponibles. Utilizar alias para mostrar los nombres de las columnas en español.
SELECT concat(first_name, " ", last_name) as nombre from actor limit 5;

#2. Obtener un listado que incluya nombre, apellido y correo electrónico de los clientes (customers) inactivos. 
#Utilizar alias para mostrar los nombres de las columnas en español.
SELECT FIRST_NAME, LAST_NAME, EMAIL, ACTIVE FROM CUSTOMER WHERE ACTIVE = 0;

#3. Obtener un listado de films incluyendo título, año y descripción de los films que tienen un rental_duration mayor a cinco.
# Ordenar por rental_duration de mayor a menor. Utilizar alias para mostrar los nombres de las columnas en español.
SELECT TITLE, release_YEAR, DESCRIPTION FROM FILM WHERE rental_DURATION > 5;

#4. Obtener un listado de alquileres (rentals) que se hicieron durante el mes de mayo de 2005, incluir en el resultado todas las columnas disponibles.
SELECT * FROM RENTAL WHERE month(rental_date) = 05;

#1. Obtener la cantidad TOTAL de alquileres (rentals). Utilizar un alias para mostrarlo en una columna llamada “cantidad”.
SELECT COUNT(RENTAL_ID) AS CANTIDAD FROM rental;

#2. Obtener la suma TOTAL de todos los pagos (payments). Utilizar un alias para mostrarlo en una columna llamada “total”, junto a una columna con la
#cantidad de alquileres con el alias “Cantidad” y una columna que indique el “Importe promedio” por alquiler.
SELECT SUM(AMOUNT) AS TOTAL, COUNT(RENTAL.rental_id) AS CANTIDAD, AVG(amount) AS "Importe promedio" FROM payment
INNER JOIN rental ON PAYMENT.rental_id = RENTAL.rental_id;


#3. Generar un reporte que responda la pregunta: ¿cuáles son los diez clientes que más dinero gastan y en cuántos alquileres lo hacen?
SELECT cUSTOMER_ID, SUM(AMOUNT), count(RENTAL_ID) FROM PAYMENT GROUP BY customer_id ORDER BY sum(amount) desc limit 10;

#4. Generar un reporte que indique: ID de cliente, cantidad de alquileres y monto total para
#todos los clientes que hayan gastado más de 150 dólares en alquileres.
SELECT CUSTOMER_ID, SUM(AMOUNT) as total, count(RENTAL_ID) as cantidad FROM PAYMENT GROUP BY customer_id HAVING sum(amount) > 150 ORDER BY total desc;

# 5. Generar un reporte que muestre por mes de alquiler (rental_date de tabla rental), la cantidad de alquileres y la suma total pagada
 #(amount de tabla payment) para el año de alquiler 2005 (rental_date de tabla rental).
select count(RENTAL.rental_id) as cantidad, sum(amount) as total, year(rental_date), month(rental_date) as Mes from payment 
inner join rental on rental.rental_id = payment.rental_id where YEAR(RENTAL_DATE) = 2005 GROUP BY mes;

#6. Generar un reporte que responda a la pregunta: ¿cuáles son los 5 inventarios más alquilados? (columna inventory_id en la tabla rental).
#Para cada una de ellas indicar la cantidad de alquileres.
SELECT inventory_ID, COUNT(rental_ID) AS TOTAL FROM RENTAL GROUP BY inventory_ID ORDER BY TOTAL DESC;
SELECT inventory_ID, COUNT(rental_ID) AS TOTAL FROM RENTAL GROUP BY inventory_ID ORDER BY TOTAL DESC LIMIT 5;

#1. a) Crear una vista denominada “vista_mostrar_pais” que devuelva un reporte de los países. b) Invocar la vista creada.
CREATE VIEW “vista_mostrar_pais” AS SELECT * FROM COUNTRY;
SELECT * FROM  “vista_mostrar_pais”;

#2. a) Crear una vista que devuelva un resumen con el apellido y nombre (en una sola columna denominada “artista”) de los artistas y la cantidad de
#filmaciones que tienen. Traer solo aquellos que tengan más de 25 filmaciones y ordenarlos por apellido. b) Invocar la vista creada.
#c) En la misma invocación de la vista, traer aquellos artistas que tienen menos de 33 filmaciones.
#d) Con la misma sentencia anterior, ahora, mostrar el apellido y nombre de los artistas en minúsculas y traer solo aquellos artistas cuyo apellido
#comience con la letra "a". e) Eliminar la vista creada.

CREATE VIEW VIEW_ARTISTA AS
SELECT ACTOR.ACTOR_ID, actor.first_name, actor.last_name, count(film_actor.film_id) as CANT FROM actor
INNER JOIN film_actor ON film_actor.actor_id = actor.actor_id GROUP BY actor.actor_id 
HAVING count(film_actor.film_id) > 25 ORDER BY ACTOR.last_name; 
ALTER VIEW VIEW_ARTISTA AS SELECT ACTOR.ACTOR_ID, actor.first_name, actor.last_name, count(film_actor.film_id) as CANT FROM actor
INNER JOIN film_actor ON film_actor.actor_id = actor.actor_id GROUP BY actor.actor_id 
HAVING count(film_actor.film_id) < 33 ORDER BY ACTOR.last_name;

ALTER VIEW VIEW_ARTISTA AS SELECT ACTOR.ACTOR_ID, lower(actor.first_name), lower(actor.last_name) FROM actor
where actor.last_name like "a%" ORDER BY actor.actor_id;
SELECT * from view_artista;

DROP view view_artista;

#3. a) Crear una vista que devuelva un reporte del título de la película, el apellido y nombre (en una sola columna denominada “artista”) 
#de los artistas y el costo de reemplazo. Traer solo aquellas películas donde su costo de reemplazo es entre 15 y 27 dólares,
#ordenarlos por costo de reemplazo. b) Invocar la vista creada. c) En la misma invocación de la vista, traer aquellas películas que comienzan
#con la letra "b". d) Modificar la vista creada agregando una condición que traiga los artistas
#cuyo nombre termine con la letra "a" y ordenarlos por mayor costo de reemplazo. e) Invocar la vista creada.

CREATE VIEW film_view as
SELECT film.title, concat(actor.first_name, " ", actor.last_name) as artista , film.replacement_cost FROM FILM
INNER JOIN film_actor ON film_actor.film_id = film.film_id 
INNER JOIN actor ON actor.actor_id = film_actor.actor_id WHERE film.replacement_cost BETWEEN 15 and 27;

SELECT * FROM FILM_VIEW WHERE title LIKE "b%";
ALTER VIEW FILM_VIEW AS
SELECT film.title, concat(actor.first_name, " ", actor.last_name) as artista , film.replacement_cost FROM FILM
INNER JOIN film_actor ON film_actor.film_id = film.film_id 
INNER JOIN actor ON actor.actor_id = film_actor.actor_id WHERE actor.last_name like "%a" ORDER BY film.replacement_cost DESC;

SELECT * from film_view;