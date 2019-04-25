import { ADD_MOVIES, ADD_MOVIE, DELETE_MOVIE } from '../constants/action-types.js';

const initialState = {
  movies: [],
  myMovies: [
    {
      id: 0,
      release_date: '12-12-2018',  
      poster_path: 'https://via.placeholder.com/200x300', 
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
  }
  return state;
};
export default rootReducer;