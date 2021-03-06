var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', userSchema);