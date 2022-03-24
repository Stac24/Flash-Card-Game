const { DataTypes } = require("@sequelize/core");
const sequelize = require("./index.js").sequelize;

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stars: {
    type: DataTypes.INTEGER,
  },
});

const run = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    const users = await User.findAll();
    console.log(
      users.forEach((user) => {
        console.log(
          "User",
          user.dataValues.id,
          "Email",
          user.dataValues.email,
          "Stars",
          user.dataValues.stars
        );
      })
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

run();
