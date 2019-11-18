const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const boardSchema = new Schema({
    userid: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    views: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;