'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lastname: {
        type: DataTypes.STRING
    },
    firstname: {
        type: DataTypes.STRING
    },
    mail: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
  },
  {
      createdAt: false,
      updatedAt: false
  }
);

  User.associate = (models) => {
    
  };

return User;
};