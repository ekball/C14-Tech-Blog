const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create user model
class User extends Model {

}

// organize columns in table
User.init(
    // table columns
    {
        // id column is an integer, cannot be null, is a primary key, and increments
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // username is a string and cannot be null
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // email is a string, cannot be null, must be unique
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // password is a string, cannot be null, and must have at least 4 chars
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
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