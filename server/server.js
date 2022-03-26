const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const cards = require('./routes/cards');
const user = require('./routes/user');

const port = process.env.PORT || 4001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.SECRET));

// cards
app.get('/getcards', cards.getcards);
// user
app.post('/login', user.login);
app.post('/createcard', cards.createcard);

// listening on port
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
