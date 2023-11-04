module.exports = (sequelize, DataTypes) => {
  const Oven = sequelize.define("Oven", {
    Name: DataTypes.STRING,
    Size: DataTypes.INTEGER,
    Price: DataTypes.INTEGER,
    Watt : DataTypes.INTEGER
  });
  return Oven;
};
