const express = require("express");
const logger = require("morgan");
const store = require("./routes/store.js");
const { NotFoundError } = require("./utils/errors.js");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(logger("tiny"));
app.use(express.json());
app.use("/store", store);

app.get("/", async (req, res) => {
  res.status(200).json({ ping: "pong" });
});

// handling for 404s
app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
