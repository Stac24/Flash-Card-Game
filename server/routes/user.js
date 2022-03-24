const { DataTypes } = require("@sequelize/core");
const sequelize = require("../models/index.js").sequelize;

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stars: {
    type: DataTypes.INTEGER,
  },
});

exports.login = async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const users = await User.findAll({ raw: true });
    // console.log(users);
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
  }
};
