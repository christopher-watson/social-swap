module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define("user", {
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
    }
  }, {
    freezeTableName: true
  });

  user.associate = function(models) {
    user.hasOne(models.Post, {
      onDelete: "cascade"
    });
  };

  return user;
}
