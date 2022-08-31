// Import Express
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

// Import API file
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

// Use Morgan
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false })); // true will mean pass the extend rich data
app.use(bodyParser.json()); // extract json data

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
    return res.status(200).json({});
  }
});

// Use Routes
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((request, response, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({
    error: {
      message: error.message,
    },
  });
});

// Export
module.exports = app;