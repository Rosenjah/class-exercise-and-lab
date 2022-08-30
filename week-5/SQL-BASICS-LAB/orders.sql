CREATE TABLE orders ( order_id SERIAL PRIMARY KEY, person_id INTEGER, product_name VARCHAR(200), product_price NUMERIC, quantity INTEGER );

INSERT INTO orders(person_id, product_name, product_price, quantity)
VALUES  (1, 'table', 100, 3),
        (2, 'chair', 50, 10),
        (3, 'desk', 120, 7),
        (4, 'armoir', 140, 9),
        (5, 'couch', 400, 6),
        (5, 'couch', 400, 4),
SELECT * FROM orders
SELECT SUM(quantity) FROM orders;
SELECT SUM(product_price) FROM orders;
SELECT SUM(product_price * quantity) FROM orders;
SELECT SUM(product_price * quantity) FROM orders WHERE person_id = 2;



-- Instructions
-- Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.

-- Add 5 orders to the orders table.
-- Make orders for at least two different people.

-- person_id should be different for different people.

-- Select all the records from the orders table.

-- Calculate the total number of products ordered.

-- Calculate the total order price.

-- Calculate the total order price by a single person_id.