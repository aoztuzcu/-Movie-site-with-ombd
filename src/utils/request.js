import axios from "axios";
const request = axios.create({
  baseURL: "http://www.omdbapi.com/",
  params: {
    apikey: "b0e9a3e8",
  },
});

function fetchMoviesBySearchTerm(searchTerm, page = 1) {
  return request.get("/", {
    params: {
      s: searchTerm,
      page,
    },
  });
}

export { fetchMoviesBySearchTerm };
