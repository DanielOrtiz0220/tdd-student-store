const { storage } = require("../data/storage");

class Store {
  static products() {
    const products = storage.get("products").value();
    return products;
  }

  static fetchProductById(productId) {
    // fetch a single transaction
    const products = storage.get("products").value();
    const product = products[productId - 1];
    return product;
  }

  static createCart(cart, orderId) {
    console.log("Creating order...");

    const purchases = storage.get("purchases");
    purchases.push(cart).write(); //review this line
  }

  static receipt(orderId = 1) {
    console.log(storage.get("purchases").value()[orderId - 1]);
    const results = storage.get("purchases");

    return results[0];
  }
}

module.exports = Store;
