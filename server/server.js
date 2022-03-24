const express = require("express");
const cors = require("cors");
const controller = require("./controller.js");
const port = process.env.PORT || 4001;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", controller.test);

//listening on port
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
