const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET All",
  });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId; // Extract the id from request
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
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "POST",
    order: order,
  });
});

router.patch("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Updated order!",
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted order!",
  });
});

module.exports = router;
