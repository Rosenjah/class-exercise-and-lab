SELECT first_name, last_name FROM employee WHERE city = 'Calgary';
SELECT MAX(birth_date) from employee;
SELECT MIN(birth_date) from employee;
SELECT * FROM employee WHERE reports_to = 2;
SELECT COUNT(*) FROM employee WHERE city = 'Lethbridge'





-- Instructions
-- List all employee first and last names only that live in Calgary.

-- Find the birthdate for the youngest employee.

-- Find the birthdate for the oldest employee.

-- Find everyone that reports to Nancy Edwards (use the ReportsTo column). * You will need to query the employee table to find the id for Nancy Edwards

-- Count how many people live in Lethbridge.