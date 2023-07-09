const OSMData = require("../models/osmModel");

// Search for a trail in the dashboard and display details and map
const searchTrail = async (req, res) => {
  try {
    const trailId = req.params.trailId;

    // Retrieve trail details from MongoDB based on trailId
    const trail = await OSMData.findById(trailId);

    // Return the details and the geojson for map display
    res.send({
      name: trail.name,
      latitude: trail.latitude,
      longitude: trail.longitude,
      geojson: trail.geojson,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while searching for the trail.");
  }
};

module.exports = {
  searchTrail,
};
