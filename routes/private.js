const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../controllers/private");

router.route("/").get();

module.exports = router;
