const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// database connection
mongoose.connect(process.env.DATABASE).then(() => {
  console.log(`Database connection is successful 🛢`.blue.bold);
});

// server
const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`.yellow.bold);
});
