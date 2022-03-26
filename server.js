require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cards = require("./routes/cards.js");
const user = require("./routes/user.js");
const port = process.env.PORT || 4001;
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.SECRET));

app.get("/getcards", cards.getcards);
app.post("/login", user.login);
app.post("/createcard", cards.createcard);


//listening on port
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
