const { Router } = require("express");
const carsRouter = require("./carsRouter");

const router = Router();

router.use("/cars", carsRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
