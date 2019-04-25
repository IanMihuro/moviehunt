import { ADD_MOVIES, ADD_MOVIE, DELETE_MOVIE, LOGIN_USER } from '../constants/action-types.js';

const initialState = {
  movies: [],
  users: [],
  myMovies: [
    {
      id: 0,
      release_date: '12-12-2018',  
      poster_path: 'https://via.placeholder.com/150x250', 
      original_title: 'Sample Movie', 
      overview: 'This is a sample Movie, This is a sample Movie, This is a sample Movie, This is a sample Movie, This is a sample Movie', 
      vote_average: 10,
    },
  ],
};
function rootReducer(state = initialState, action) {
  if(action.type === ADD_MOVIES) {
    state = {...state, movies: action.payload}  
  } else if (action.type === ADD_MOVIE) {
    state = {myMovies: state.myMovies.concat(action.payload)}
  } else if (action.type === DELETE_MOVIE) {
    state = {myMovies: state.myMovies.filter(item => item.id !== action.payload.id)} 
  } else if (action.type === LOGIN_USER) {
    state = {users: state.users.concat(action.payload)}
  }
  console.log('action', action);
  console.log('state', state);
  return state;
};
export default rootReducer;