import {POST_REQUEST_START, POST_SUCCESS_DATA, POST_FAILURE_DATA} from '../actions/actionTypes';


const initialState = {
    loading: false,
    data: [],
    error: "",
}


const postReducer = (state = initialState, action) => {
    switch(action.type){
        case POST_REQUEST_START:  return {...state, loading: true};

        case POST_SUCCESS_DATA : return {...state, data: action.payload, loading: false, error: ""};

        case POST_FAILURE_DATA : return {...state, data: [], loading: false, error: action.payload};

        default: return state;
    }
}

export default postReducer;