export const localStorageKey = "movieList";
export const initialState = JSON.parse(
  localStorage.getItem(localStorageKey)
) || {
  movieList: [],
  movieCount: 0,
};
export const movieListReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        movieList: payload,
      };
    case "REMOVE_FROM_LIST":
      return {
        ...state,
        movieList: payload,
      };
    default:
      throw new Error();
  }
};
