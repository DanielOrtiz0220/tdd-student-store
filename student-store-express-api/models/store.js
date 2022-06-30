const { storage } = require("../data/storage");

class Store {
  static products() {
    const products = storage.get("products").value();
    return products;
  }

  static async fetchTransactionById(transactionId) {
    // fetch a single transaction
    const transaction = storage
      .get("transactions")
      .find({ id: Number(transactionId) })
      .value();
    return transaction;
  }
}

module.exports = Store

// class store {
//   static;
// }
