import { SongData } from "../model/Songs";

export const getMoviesFromApiAsync = () => {
  return async (dispatch) => {
    dispatch(getSongsList());
    try {
      let response = await fetch(
        'https://itunes.apple.com/search?term=Michael+jackson'
      );
      let json = await response.json();
      let modifiedResponse = json.results.map((item) => {
       let songData = new SongData(item)
       return songData
      })
      return dispatch(getSongsListSuccess(modifiedResponse));
    } catch (error) {
      console.error(error);
      dispatch(getSongsListError(error));
    }
  }
  };

export const getSongsList = () => ({
    type: 'GET_SONGS_LIST',
});

export const getSongsListError = (error) => ({
    type: 'GET_SONGS_LIST_ERROR',
    error: error,
});

export const getSongsListSuccess = (data) => ({
    type: 'GET_SONGS_LIST_SUCCESS',
    data: data,
});