import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import postReducer from './reducer/postReducer';

const store = createStore(postReducer, applyMiddleware(thunk));

export default store;


// (dispatch)=>{
//     dispatch(postRequestStart());
//      axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
//      .then(response =>  dispatch(postSuccessData(response.data)))
//      .catch(err => dispatch(postFailureData(err.message)))
// }