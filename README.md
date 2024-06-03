# OOP - Abstraction

1. Fork and clone this repository
2. `npm ci` to install dependencies
3. `npx jasmine` to run any tests you create

## Core Criteria

Create an e-commerce application where users can place orders for products.

- A basket should be able to add and remove products
- A product should have a name, price and description
- A product should have a way to output its details as a well formatted string containing its name, price and description
- You must have at least one test for every function you create

## Extensions

1. A basket should be able to keep track of the quantity of products added
2. A basket should be able to generate an order, which contains all of the products and their quantities. A sub-total should exist for each "line" on the order, as well as a total for all of the lines.
3. You should be able to generate a receipt based on an order. The receipt should contain details about the business, such as a phone number, business name and VAT number.
4. Products should have a limited available quantity. You should not be able to add more than the available quantity to a basket, and every time a product is added to a basket the available quantity should be updated to reflect that. This allows for soft-reserving items while shopping.