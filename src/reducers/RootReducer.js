const initialState = {
    songsList : [],
    loading : true
};

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case  'GET_SONGS_LIST':
            return { 
                ...state
            }
        case  'GET_SONGS_LIST_SUCCESS':
        return { 
            ...state,
            songsList: [...action.data],
            loading: false
        }
        case  'getSongsListError':
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
