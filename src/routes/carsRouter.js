const { Router } = require("express");

const { createCars } = require("../controllers/CarsController");

const router = Router();

router.post("/create", async (req, res) => {
  const { name, horsepower, img, value } = req.body;
  try {
    const response = await createCars(name, horsepower, img, value);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
