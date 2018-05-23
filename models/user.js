module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 140],
      }
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
      // validate: {
      //   isEmail: true,
      // }
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fb: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linked_in: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    freezeTableName: true
  });

  Users.associate = function (models) {
    Users.belongsTo(models.Events, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Users;
};