const { DataTypes } = require('@sequelize/core');
const { sequelize } = require('../models/index.js');

const Card = sequelize.define('card', {
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
  image_url: {
    type: DataTypes.STRING,
  },
});

exports.getcards = async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const cards = await Card.findAll({ raw: true });
    console.log(cards);
    res.status(200).send(cards);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

exports.createcard = async (req, res) => {
  const { front, back, cardset } = req.body;

  try {
    const card = await Card.create({ front, back, cardset });
    return res.status(201).json(card);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
