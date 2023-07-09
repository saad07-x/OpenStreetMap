const express = require("express");
const osmController = require("../controllers/osmController");

const router = express.Router();

// Extract data from Overpass API
router.get("/extractData", osmController.extractData);

// Extract data from Photon API
router.get("/extractPhotonData", osmController.extractPhotonData);

module.exports = router;
