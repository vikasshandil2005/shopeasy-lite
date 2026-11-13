const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Headphones", price: 2000 },
    { id: 3, name: "Keyboard", price: 1500 }
];

function getProducts() {
    return products;
}

function getProductById(id) {
    return products.find(product => product.id === id);
}

module.exports = { getProducts, getProductById };