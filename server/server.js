const express = require("express");
const cors = require("cors");
const cards = require("./routes/cards.js");
const user = require("./routes/user.js");
const port = process.env.PORT || 4001;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", cards.test);
app.get("/login", user.login);

//listening on port
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
