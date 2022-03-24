const { DataTypes } = require("@sequelize/core");
const sequelize = require("../models/index.js").sequelize;

const Card = sequelize.define("card", {
  front: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  back: {
    type: DataTypes.STRING,
  },
  cardset: {
    type: DataTypes.STRING,
  },
});

exports.getcards = async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    let cards = await Card.findAll({ raw: true });
    console.log(cards);
    res.status(200).send(cards);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
