import { FETCH_SONGS } from '../actions/ActionTypes';

const initialState = {
    songsList : [],
    loading : true
};

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case  FETCH_SONGS.REQUEST:
            return { 
                ...state
            }
        case  FETCH_SONGS.SUCCESS:
        return { 
            ...state,
            songsList: [...action.data],
            loading: false
        }
        case FETCH_SONGS.FAILURE:
        return { 
            ...state,
            loading: false,
            songsList: []
        }
        default:
            return state;
    }
};

export default RootReducer;
