const express = require("express");
const tripController = require("../controllers/tripController");

const router = express.Router();

// Create a trip and save selected OSM way/node
router.post("/createTrip", tripController.createTrip);

module.exports = router;
