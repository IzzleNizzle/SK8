module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    long: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Post;
};
