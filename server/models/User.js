const { Sequelize, DataTypes } = require("@sequelize/core");

const sequelize = new Sequelize(
  "flashcard_db",
  "flashcard_dev",
  "flashcard_password",
  {
    define: {
      createdAt: "createdat",
      updatedAt: "updatedat",
    },
    host: "localhost",
    dialect: "postgres",
  }
);

const User = sequelize.define(
  "user",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
    },
  },
  {
    subQuery: false,
    // Other model options go here
  }
);

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
