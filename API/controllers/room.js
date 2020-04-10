const mongoose = require('mongoose');

const Room = require('../models/room');

exports.create_room = (req, res, next) => {
    const room = new Room({
        _id: new mongoose.Types.ObjectId(),
        ObjectIndex: new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
        type: req.body.type,
    });
    room.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            title: result.title,
            content: result.content,
            _id: result._id
        });
        console.log("cre= ated");
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
        });
};
