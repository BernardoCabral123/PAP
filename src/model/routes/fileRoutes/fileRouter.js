const express = require("express");
const router = express.Router();

const assetRouter = require("./assetRouter");
router.use("/assets",assetRouter);

const controllerRouter = require("./controllerRouter");
router.use("/controllers",controllerRouter);

const styleRouter = require("./styleRouter");
router.use("/styles",styleRouter);

module.exports = router;
