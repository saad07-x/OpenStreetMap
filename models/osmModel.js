const mongoose = require("mongoose");

const osmDataSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  geojson: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
});

const OSMData = mongoose.model("OSMData", osmDataSchema);

module.exports = OSMData;
