const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate
        }
    });
};