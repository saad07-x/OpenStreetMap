const axios = require("axios");
const OSMData = require("../models/osmModel");

// Extract data from Overpass API and store in MongoDB with geojson property
const extractAndStoreData = async (apiURL) => {
  try {
    const response = await axios.get(apiURL);

    const data = response.data.elements.map((element) => ({
      name: element.tags.name,
      latitude: element.lat,
      longitude: element.lon,
      geojson: {
        type: "Point",
        coordinates: [element.lon, element.lat],
      },
    }));

    await OSMData.insertMany(data);
  } catch (error) {
    throw new Error("An error occurred while extracting and storing data.");
  }
};

// Extract data from Overpass API
const extractData = async (req, res) => {
  const overpassURL = process.env.OVERPASS_API_URL;
  try {
    await extractAndStoreData(overpassURL);
    res.send("Data extracted and stored successfully!");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while extracting data from the Overpass API.");
  }
};

// Extract data from Photon API
const extractPhotonData = async (req, res) => {
  const photonURL = process.env.PHOTON_API_URL;
  try {
    await extractAndStoreData(photonURL);
    res.send("Data extracted and stored successfully!");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while extracting data from the Photon API.");
  }
};

module.exports = {
  extractData,
  extractPhotonData,
};
