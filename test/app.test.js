const test = require('node:test');
const assert = require('node:assert');
const { getProducts, getProductById } = require('../src/app');

test('should return all products', () => {
    const products = getProducts();
    assert.strictEqual(products.length, 3);
});

test('should find a product by ID', () => {
    const product = getProductById(1);
    assert.strictEqual(product.name, 'Laptop');
});

test('should return undefined for an invalid ID', () => {
    const product = getProductById(99);
    assert.strictEqual(product, undefined);
});