const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: false }));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
