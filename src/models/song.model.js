import mongoose, { Mongoose } from "mongoose";

const songSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    artist : {
        type: String,
        required: true,
    },
    imageUrl : {
        type: String,
        required: true,
    },
    audioUrl : {
        type: String,
        required: true,
    },
    duration : {
        type: Number,
        required: true,
    },
    albumId : {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Alubum',
        required: false,
    },
}, {timestamps: true});

export const Song = mongoose.model('Song', songSchema);