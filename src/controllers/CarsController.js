const { Cars } = require("../db");

const createCars = async (name, horsepower, img, value) => {
  const create = await Cars.create({ name, horsepower, img, value });
  if (!create) {
    throw new Error("Failed to create a car");
  }
  return create;
};

module.exports = {
  createCars,
};
