import { Album } from "../models/album.model.js";

export const getAllAlbum = async (req, res, next) => {
  try {
    const album = await Album.find();
    res.status(200).json(album);
  } catch (error) {
    next(error);
  }
};

export const getAllAlbumById = async (req, res, next) => {
  try {
    const albumId = req.params;
    //to populate the songs object in album, so that in frontend we can have each songs details in album
    const album = await Album.findById(albumId).populate("songs");
    if (!album) {
      res.status(400).json({ message: `Album not found with id ${albumId}` });
    }
    res.status(200).json(album);
  } catch (error) {
    console.log("error fetching album with id");
    next(error);
  }
};
