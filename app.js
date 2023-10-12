const express = require("express");
const server = express();
const path = require("path");

const hostname = "127.0.0.1";
const port = 3001;

server.use(express.static(path.join(__dirname, "public")));

server.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});



server.listen(port, hostname, () => {
  console.log(`Server running on port ${port}`);
});
