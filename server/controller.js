require("dotenv").config();

const test = async (req, res) => {
  try {
    res.status(200).send("test");
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    res.status(200).send("test");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  test,
};
