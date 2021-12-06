// Require Mongoos and Moment
const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// Thoughts Schema
const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // use moment as getter method
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
        },
    }
);

// create the Thoughts model using the Thoughts Schema
const Thoughts = model('Thoughts', ThoughtsSchema);

// Export Thoughts Module
module.exports = Thoughts;