import { useReducer, createContext, useEffect } from "react";
import {
  initialState,
  movieListReducer,
  localStorageKey,
} from "./MovieListReducer";

export const MovieListContext = createContext(initialState);

export const MovieListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieListReducer, initialState);

  useEffect(() => {
    // Herhangi bir değişiklik olduğunda localStorage'a kaydet
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state]);

  const addToList = (movie) => {
    const updatedList = state.movieList.concat(movie);

    dispatch({
      type: "ADD_TO_LIST",
      payload: updatedList,
    });
  };
  const removeFromList = (movie) => {
    const updatedList = state.movieList.filter(
      (x) => x.imdbID !== movie.imdbID
    );

    dispatch({
      type: "REMOVE_FROM_LIST",
      payload: updatedList,
    });
  };

  const values = { movieList: state.movieList, addToList, removeFromList };
  return (
    <MovieListContext.Provider value={values}>
      {children}
    </MovieListContext.Provider>
  );
};
