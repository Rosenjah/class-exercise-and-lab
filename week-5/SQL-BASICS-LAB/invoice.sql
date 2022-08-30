SELECT COUNT(*) FROM invoice WHERE billing_country = 'USA';
SELECT MAX(total) FROM invoice;
SELECT MIN(total) FROM invoice;
SELECT * FROM invoice WHERE total > 5;
SELECT COUNT(*) FROM invoice WHERE total < 5;
SELECT COUNT(*) FROM invoice WHERE billing_state in ('CA', 'TX', 'AZ');
SELECT AVG(total) FROM invoice;
SELECT SUM(total) FROM invoice;

UPDATE invoice 
SET total = 24 
WHERE invoice_id = 5;

DELETE 
FROM invoice 
WHERE invoice_id = 1;




-- Instructions
-- Count how many orders were made from the USA.

-- Find the largest order total amount.

-- Find the smallest order total amount.

-- Find all orders bigger than $5.

-- Count how many orders were smaller than $5.

-- Count how many orders were in CA, TX, or AZ (use IN).

-- Get the average total of the orders.

-- Get the total sum of the orders.

-- Update the invoice with an invoice_id of 5 to have a total order amount of 24.

-- Delete the invoice with an invoice_id of 1.