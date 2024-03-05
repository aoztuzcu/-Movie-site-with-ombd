import { useState, useEffect, useContext } from "react";
import { useDelay } from "@/utils/hooks/useDelay";
import { fetchMoviesBySearchTerm } from "@/utils/request";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import Modal from "@/components/Modal";
import { ThemeContext } from "@/contexts/ThemeContext";
import { MovieListContext } from "@/contexts/MovieList";

const Home = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("pokemon");
  const [isLoading, setIsLoading] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(3);
  const [totalPages, setTotalPages] = useState(0);
  const isModalTimeOutDone = useDelay(3000);
  const { theme, setTheme, layout, setLayout } = useContext(ThemeContext);
  const { movieList } = useContext(MovieListContext);

  function handleSubmit(text) {
    setSearchTerm(text);
  }

  useEffect(() => {
    if (isModalTimeOutDone) {
      setIsModalOpen(true);
    }
  }, [isModalTimeOutDone]);

  useEffect(() => {
    fetchMoviesBySearchTerm(searchTerm, currentPage)
      .then((r) => {
        if (r.data.Error) {
          setErrorText(r.data.Error);
          setResults([]);
        } else {
          setResults(r.data.Search);
          setTotalPages(Math.ceil(r.data.totalResults / 10));
          setErrorText("");
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setIsLoading(false));
  }, [searchTerm, currentPage]);

  if (isLoading) {
    return <h1>sayfa yükleniyor</h1>;
  }
  const filteredResults = results.filter(
    (result) => !movieList.some((movie) => movie.imdbID === result.imdbID)
  );

  return (
    <div className="container">
      <h1>Home Page</h1>
      {movieList.map((movie) => (
        <div key={movie.imdbID}>{movie.Title}</div>
      ))}
      {theme === "light" && (
        <button onClick={() => setTheme("dark")}>Karanlık Tema</button>
      )}
      {theme === "dark" && (
        <button onClick={() => setTheme("light")}>Aydınlık Tema</button>
      )}
      {layout === "vertical" && (
        <button onClick={() => setLayout("horizontal")}>Yatay</button>
      )}
      {layout === "horizontal" && (
        <button onClick={() => setLayout("vertical")}>Dikey</button>
      )}
      <p>
        Mevcut Tema : {theme}, Mevcut layout: {layout}
      </p>

      <SearchBar onSubmit={handleSubmit}></SearchBar>
      {filteredResults.length > 0 && (
        <div className="row">
          {filteredResults.map((result) => (
            <MovieCard key={result.imdbID} movie={result} />
          ))}
        </div>
      )}
      {errorText && <h1>{errorText}</h1>}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(p) => setCurrentPage(p)}
      ></Pagination>
      <Modal
        title="test modal"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in.
        </p>
      </Modal>
    </div>
  );
};
export default Home;
