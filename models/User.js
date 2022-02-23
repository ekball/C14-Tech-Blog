const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create user model
class User extends Model {

}

// organize columns in table
User.init(
    // table columns
    {

    },
    // configure table
    {
        // connect to sequelize
        sequelize,

        // turn off auto creation of time stamps
        timestamps: false,

        // don't change name of tables
        freezeTableName: true,

        // use underscores to make table easier to read
        underscored: true,

        // specify model name to be lowercase
        modelName: "user"
    }
)

// export
module.exports = User;