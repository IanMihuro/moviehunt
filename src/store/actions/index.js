import { ADD_MOVIES, ADD_MOVIE, DELETE_MOVIE} from "../constants/action-types";

export function addMovies(payload) {
  return { type: ADD_MOVIES, payload }
};
export function addMovie(payload) {
  return { type: ADD_MOVIE, payload}
};
export function deleteMovie(payload) {
  return { type: DELETE_MOVIE, payload}
};
