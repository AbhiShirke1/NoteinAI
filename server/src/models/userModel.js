const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email :{
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    notes: [],

    favourites: {
        type: Boolean,
        default: false
    }
})

const UserModel = new mongoose.model("userModel", UserSchema)
module.exports = UserModel