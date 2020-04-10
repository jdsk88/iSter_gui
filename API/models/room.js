
//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var RoomSchema = new Schema(
    {
        // title: { type: String, required: true },
        // content: { type: String, required: true },
        // type: { type: String, required: true },
        // state: { type: Number, required: true },
        // serial_number: { type: String, required: true },
        title: { type: String },
        content: { type: String },
        type: { type: String },
        
    }
);

RoomSchema
    .virtual('url')
    .get(function () {
        return '/rooms' + this._id;
    });

module.exports = mongoose.model('Room', RoomSchema);