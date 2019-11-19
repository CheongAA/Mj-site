const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    userid: String,
    contents: String,
    date: { type: Date, default: Date.now() }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;