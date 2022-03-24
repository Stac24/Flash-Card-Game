exports.test = async (req, res) => {
  try {
    res.status(200).send("test");
  } catch (err) {
    console.log(err);
  }
};
