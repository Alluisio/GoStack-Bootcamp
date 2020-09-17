const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello world" });
});

app.listen(3334, () => {
  console.log("Back-end started!! Port 3334");
});
