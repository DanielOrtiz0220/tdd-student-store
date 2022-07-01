const express = require("express");
const { receipt } = require("../models/store");
const router = express.Router();
const Store = require("../models/store");

router.get("/", async (req, res, next) => {
  try {
    products = Store.products();
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
});
router.get("/receipt/:orderId", (req, res, next) => {
  try {
    pastOrder = Store.receipt(req.params.orderId);
    if (pastOrder) {
      console.log(pastOrder);
    }

    res.status(200).json(pastOrder);
  } catch (err) {
    next(err);
  }
});

router.get("/:productId", (req, res, next) => {
  try {
    chosenProduct = Store.fetchProductById(req.params.productId);

    res.status(200).json(chosenProduct);
  } catch (err) {
    next(err);
  }
});

router.post("/receipt/:orderId", async (req, res, next) => {
  try {
    console.log(req.body);
    res.status(201).send(Store.createCart(req.body, req.params.orderId));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
