const express = require("express");
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

module.exports = router;

// router.post("/store/:productId", async (req, res, next) => {
//   try {
//     // console.log(req.params);
//     // res.status(200).json(req.params);
//     res.send(model.store(req.body));
//   } catch (err) {
//     next(err);
//   }
// });
