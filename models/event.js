module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    code: DataTypes.STRING
  });

  Event.associate = function (models) {
    Event.hasMany(models.Users, {
      onDelete: "cascade"
    });
  };

  return Event;
};