CREATE TABLE person ( person_id SERIAL PRIMARY KEY, name VARCHAR(200), age INTEGER, height INTEGER, city VARCHAR(200), favorite_color VARCHAR(200));

INSERT INTO person ( name, age, height, city, favorite_color ) VALUES ( 'Haywood Petty', 23, 187, 'Detroit', 'Green' ),( 'Dominic Petty', 25, 181, 'Grand Blanc', 'Orange' ),( 'James Petty', 60, 188, 'Grand Blanc', 'Blue' ),( 'DeVelle Johnson', 58, 158, 'St.Louis', 'Red' ),( 'Tiffany Garret', 25, 165, 'Belleville', 'Orange' );

SELECT * FROM person ORDER BY height DESC;
SELECT * FROM person ORDER BY height;

SELECT * FROM person ORDER BY age DESC;

SELECT * FROM person Where age > 20;

SELECT * FROM person Where age = 18;

SELECT * FROM person Where age > 20 AND age<30;

SELECT * FROM person Where age <> 18;

SELECT * FROM person Where age < 20 OR age>30;

SELECT * FROM person Where favorite_color <> 'Red';

SELECT * FROM person Where favorite_color <> 'Red' AND favorite_color <> 'Blue';

SELECT * FROM person Where favorite_color = 'Orange' OR favorite_color = 'Green';

SELECT * FROM person Where favorite_color IN ('Orange','Green','Blue')

SELECT * FROM person Where favorite_color IN ('Yellow','Purple')


-- Instructions 
-- Create a table called person that records a person’s id, name, age, height (in cm , city, favorite_color. id should be an auto-incrementing id/primary key (use type: SERIAL)

-- Add 5 different people into the person database. Remember to not include the person_id because it should auto-increment.

-- Select all the people in the person table by height from tallest to shortest.

-- Select all the people in the person table by height from shortest to tallest.

-- Select all the people in the person table by age from oldest to youngest.

-- Select all the people in the person table older than age 20.

-- Select all the people in the person table that are exactly 18.

-- Select all the people in the person table that are less than 20 and older than 30.

-- Select all the people in the person table that are not 27 (use not equals).

-- Select all the people in the person table where their favorite color is not red.

-- Select all the people in the person table where their favorite color is not red and is not blue.

-- Select all the people in the person table where their favorite color is orange or green.

-- Select all the people in the person table where their favorite color is orange, green or blue (use IN).

-- Select all the people in the person table where their favorite color is yellow or purple (use IN).

