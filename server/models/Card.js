const { DataTypes } = require("@sequelize/core");
const sequelize = require("./index.js").sequelize;

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

const run = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const users = await Card.findAll();
    console.log(
      users.forEach((user) => {
        console.log(
          "User",
          user.dataValues.front,
          "Email",
          user.dataValues.back,
          "Stars",
          user.dataValues.cardset
        );
      })
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

run();
