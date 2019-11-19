const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    userid: String,
    contents: String,
    date: { type: Date, default: Date.now() }
});

const noticeSchema = new Schema({
    userid: String,
    title: String,
    contents: String,
    date: { type: Date, default: Date.now() },
    comments: [commentSchema]
});



const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice;