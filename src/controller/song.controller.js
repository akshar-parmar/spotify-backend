export const getAllSong = async (req, res, next) => {
  try {
    const songs = await Song({});
    res.status(200).json(songs);
  } catch (error) {
    console.log("error getting all the song", error);
    next(error);
  }
};


//mostly spotify uses ML algo in order to fetch the songs , based on the history of songs that user listen to. there are other factors.
export const getFeaturedSong = async (req, res, next) => {
  try {
    //fetch random 6 songs which we will show in in feature section in home page
    const songs = await Song.agrregate([
      {
        $sample: { size: 6 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          audioUrl: audioUrl,
          imageUrl: imageUrl,
        },
      },
    ]);
    res.status(200).json(songs);
  } catch (error) {
    console.log(
      "error while fetching songs for home page section getFeaturedSong"
    );
    next(error);
  }
};
export const getMadeForYouSongs = async (req, res, next) => {
  try {
    //fetch random 4 songs which we will show in in feature section in home page
    const songs = await Song.agrregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          audioUrl: audioUrl,
          imageUrl: imageUrl,
        },
      },
    ]);
    res.status(200).json(songs);
  } catch (error) {
    console.log(
      "error while fetching songs for home page section getMadeForYouSongs"
    );
    next(error);
  }
};
export const getTrendingSong = async (req, res, next) => {
  try {
    //fetch random 6 songs which we will show in in feature section in home page
    const songs = await Song.agrregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          audioUrl: audioUrl,
          imageUrl: imageUrl,
        },
      },
    ]);
    res.status(200).json(songs);
  } catch (error) {
    console.log(
      "error while fetching songs for home page section getTrendingSong"
    );
    next(error);
  }
};
