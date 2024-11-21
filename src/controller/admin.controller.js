import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import cloudinary from "../lib/cloudinary.js";

//helper function to upload the file to cloudinary cloud service
const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto",
    });
    return result.secure_url;
  } catch (error) {
    console.log("Error uploadinf file", error);
    throw new Error(`Fail to upload file to cloudinary ${error}`);
  }
};

export const createSong = async (req, res) => {
  try {
    if (!req.files || req.files.imageFile || req.files.audioFile) {
      res.status(400).json({ message: "Please upload all the files" });
    }
    const { title, albumId, artist, duration } = req.body;
    const imageFile = req.files.imageFile;
    const audioFile = req.files.audioFile;
    //function to upload the audioFile to cloudinary
    const audioUrl = await uploadToCloudinary(imageFile);
    const imageUrl = await uploadToCloudinary(audioFile);
    //function to upload the imageFile to cloudinary
    const song = new Song({
      title: title,
      artist: artist,
      imageUrl: imageUrl,
      audioUrl: audioUrl,
      duration: duration,
      albumId: albumId ? albumId : null,
    });
    await song.save();

    //add the song to album as well
    if (albumId) {
      await Album.findByIdAndUpdate(albumId, {
        $push: { songs: song._id },
      });
    }
    return res.status(401).json({
      message: "Song created successfully",
    });
  } catch (error) {
    console.log("Error create song controller", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//delete a song
export const deleteSong = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("what is id", id);

    //find by id and delete
    const song = await Song.findById(id);
    if (song.albumId) {
      //if a song belongs to album delete the song from songs array in album
      await Album.findByIdAndUpdate(song.albumId, {
        $pull: { songs: song_.id },
      });
    }
    await Song.findByIdAndDelete(id);
    res.status(200).json({ message: "Song deleted successfully" });
  } catch (error) {
    console.log("Error deleting the song", error);
    next(error);
  }
};

export const createAlbum = async (req, res, next) => {
  try {
    if (!req.files || !req.files.imageFile) {
      res.status(400).json({ message: "Please upload image file" });
    }
    const { title, artist, releaseYear } = req.body;
    const imageFile = req.files.imageFile;
    const imageUrl = await uploadToCloudinary(imageFile);

    const album = await Album.create({
      title: title,
      artist: artist,
      imageUrl: imageUrl,
      releaseYear: releaseYear,
    });

    res.status(201).json({ messsage: "Album created successfully" });
  } catch (error) {
    next(error);
  }
};

export const deleteAlbum = async (req, res, next) => {
  try {
    const { id } = req.params;
    //when we will delete the album, we will also delete the song in it
    await Song.deleteMany({ album: id });
    await Album.findByIdAndDelete(id);
    res.status(200).json({ message: "Album deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const checkAdmin = async (req, res, next) => {
  try {
    res.status(200).json({ admin: true });
  } catch (error) {
    next(error);
  }
};
