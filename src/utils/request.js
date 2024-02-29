import axios from "axios";
const request = axios.create({
  baseURL: "http://www.omdbapi.com/",
  params: {
    apikey: "a3b9f155",
  },
});

function fetchMoviesBySearchTerm(searchTerm) {
  return request.get("/", {
    params: {
      s: searchTerm,
    },
  });
}

export { fetchMoviesBySearchTerm };
