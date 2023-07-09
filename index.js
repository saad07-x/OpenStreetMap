require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const osmRoutes = require("./routes/osmRoutes");
const trailRoutes = require("./routes/trailRoutes");
const tripRoutes = require("./routes/tripRoutes");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());

app.use("/osm", osmRoutes);
app.use("/trail", trailRoutes);
app.use("/trip", tripRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
