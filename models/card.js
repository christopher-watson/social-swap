module.exports = function (sequelize, DataTypes) {
  var card = sequelize.define("card", {
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
        len: [1, 140],
        isEmail: true,
      }
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
        len: [1, 140]
      }
    },
    fb: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
        len: [1, 140]
      }
    },
    linked_in: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
        len: [1, 140]
      }
    },
    github: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
        len: [1, 140]
      }
    }
  }, {
    freezeTableName: true
  });

  card.associate = function(models) {
    card.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return card;
}