-- Write your query below
SELECT name
FROM customers
LEFT JOIN orders on customers.id = orders.customer_id
WHERE orders.customer_id is NULL