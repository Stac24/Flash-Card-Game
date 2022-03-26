const { Model, DataTypes } = require('@sequelize/core');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sequelize } = require('../models/index');
require('dotenv').config();

const oneMonth = 1000 * 60 * 60 * 24 * 30;

class User extends Model {
  static isCorrectPassword(inputPassword, dbPassword) {
    return inputPassword === dbPassword;
  }
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    stars: {
      type: DataTypes.INTEGER,
    },
    rubies: {
      type: DataTypes.INTEGER,
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    modelName: 'user',
  },
);

exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User not found');
    // check password
    if (await User.isCorrectPassword(password, user.password)) {
      // console.log('password ok');
      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: oneMonth,
      });
      res.cookie('token', token, {
        signed: true,
        maxAge: oneMonth,
        httpOnly: true,
      });
      const response = ({ id, email } = user);
      response.dataValues.token = token;
      response.dataValues.password = '';
      return res.json(response);
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: 'Incorrect credentials' });
  }
};
