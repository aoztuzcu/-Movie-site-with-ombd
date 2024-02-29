import { useState, useEffect } from "react";
import { fetchMoviesBySearchTerm } from "@/utils/request";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";

const Home = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("pokemon");
  const [isLoading, setIsLoading] = useState(true);
  const [errorText, setErrorText] = useState("");

  function handleSubmit(text) {
    setSearchTerm(text);
  }
  useEffect(() => {
    fetchMoviesBySearchTerm(searchTerm)
      .then((r) => {
        if (r.data.Error) {
          setErrorText(r.data.Error);
          setResults([]);
        } else {
          setResults(r.data.Search);
          setErrorText("");
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setIsLoading(false));
  }, [searchTerm]);

  if (isLoading) {
    return <h1>sayfa yükleniyor</h1>;
  }

  return (
    <div className="container">
      <h1>Home Page</h1>
      <SearchBar onSubmit={handleSubmit}></SearchBar>
      {results && (
        <div className="row">
          {results.map((result) => (
            <MovieCard key={result.imdbID} movie={result} />
          ))}
        </div>
      )}
      {errorText && <h1>{errorText}</h1>}
    </div>
  );
};
export default Home;
