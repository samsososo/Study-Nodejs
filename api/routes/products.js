const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET All",
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId; // Extract the id from request
  console.log("id", id);
  console.log(req);
  if (id === "special") {
    res.status(200).json({
      message: "done",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "done",
    });
  }
});

router.post("/", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  res.status(201).json({
    message: "POST",
    createdProduct: product,
  });
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Updated product!",
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted product!",
  });
});

module.exports = router;
