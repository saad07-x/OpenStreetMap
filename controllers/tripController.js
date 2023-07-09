const OSMData = require("../models/osmModel");

// Create a trip and save selected OSM way/node
const createTrip = async (req, res) => {
  try {
    // Process the request and retrieve selected OSM way/node
    // For example:
    const selectedWayId = req.body.selectedWayId;

    // Save the selected OSM way/node in MongoDB
    const selectedWay = await OSMData.findById(selectedWayId);

    // Return a success message
    res.send("Trip created successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the trip.");
  }
};

module.exports = {
  createTrip,
};
