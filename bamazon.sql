
CREATE DATABASE bamazon;
USE bamazon;

-- Create the table actors.
CREATE TABLE products (
  id int AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INT(10),
  PRIMARY KEY(id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES (cupcake, bakedGoods, 5.00, 50),
(icecreamcake, frozen, 25.00, 23),
(tastyCake, bakedGoods, 100.00, 14);

