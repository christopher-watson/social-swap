module.exports = function (sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    code: DataTypes.STRING
  },{
    freezeTableName: true
  });

  Events.associate = function (models) {
    Events.hasMany(models.Users, {
      onDelete: "cascade"
    });
  };

  return Events;
};