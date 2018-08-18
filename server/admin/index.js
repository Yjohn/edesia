const express = require("express");
const router = express.Router();

router.get("/drivers", (req, res) => res.render("drivers"));

router.get("/deliveries", (req, res) => res.render("deliveries"));

module.exports = router;
