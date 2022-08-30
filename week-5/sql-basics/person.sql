CREATE TABLE person (
     id SERIAL PRIMARY KEY, 
  name VARCHAR (255) NOT NULL, 
  age INT NOT NULL, 
  height INT NOT NULL, 
  city VARCHAR (255) NOT NULL, 
  favorite_color VARCHAR (50) NOT NULL
 );

 INSERT INTO person (name, age, height, city, favorite_color)
VALUES ( 'Chemutengure', 32, 180, 'Cincinatti', 'Blue' ),
( 'Tatenda', 43, 190, 'Columbus', 'Red' ),
( 'Chekure', 41, 188, 'Cleveland', 'Green' ),
( 'Paul', 33, 170, 'Hey', 'Yellow' ),
( 'Nyahoda', 36, 188, 'Toledo', 'Blue' ),
( 'Svengai', 30, 156, 'Kent', 'Blue' )
;

SELECT * FROM person 
ORDER BY height DESC;

SELECT * FROM person 
ORDER BY height ASC;

SELECT * FROM person 
ORDER BY age DESC;

SELECT * FROM person 
WHERE age > 20
ORDER BY age DESC;

SELECT * FROM person 
WHERE age = 18
ORDER BY name DESC;

SELECT * FROM person 
WHERE (age < 20 OR age > 30)
ORDER BY name DESC;

SELECT * FROM person 
WHERE age <> 27
ORDER BY name DESC;

SELECT * FROM person 
WHERE favorite_color <> 'Red'
ORDER BY name DESC;

SELECT * FROM person 
WHERE (favorite_color <> 'Red' AND favorite_color <> 'Blue')
ORDER BY name DESC;

SELECT * FROM person 
WHERE (favorite_color = 'Orange' OR favorite_color = 'Green')
ORDER BY name DESC;

SELECT * FROM person 
WHERE (favorite_color IN ('Orange', 'Blue', 'Green'))
ORDER BY name DESC;

SELECT * FROM person 
WHERE (favorite_color IN ('Yellow', 'Purple'))
ORDER BY name DESC;
