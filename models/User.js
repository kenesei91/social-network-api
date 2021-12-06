const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }]
        // friends: [{
        //     type:Schema.Types.ObjectId,
        //     ref: 'Users'
        // }]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// create the User model using the User Schema
const User = model('User', UserSchema);

// Export User module
module.exports = User;