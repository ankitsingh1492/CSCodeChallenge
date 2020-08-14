import { SongData } from "../model/Songs";
import { FETCH_SONGS } from './ActionTypes';


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
    type: FETCH_SONGS.REQUEST,
});

export const getSongsListError = (error) => ({
    type: FETCH_SONGS.FAILURE,
    error: error,
});

export const getSongsListSuccess = (data) => ({
    type: FETCH_SONGS.SUCCESS,
    data: data,
});