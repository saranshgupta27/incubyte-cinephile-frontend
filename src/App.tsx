import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieDetailsCard from "./components/MovieDetailsCard";
// import { worker } from "./mocks/browser";

import {
  getMoviesByName,
  getMoviesDetails as getMovieDetails,
} from "./utils/helpers";

function App() {
  const [searchedMovies, setSearchedMovies] = useState<
    [{ name: string; image: string; releaseDate: string; id: number }] | null
  >(null);
  const [searchedMovie, setSearchedMovie] = useState("");
  const [searchMovieTimer, setSearchMovieTimer] =
    useState<NodeJS.Timeout | null>(null);

  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [selectedMovieData, setSelectedMovieData] = useState<null | {
    overview: string;
    originalLanguage: string;
    duration: number;
    image: string;
  }>(null);

  useEffect(() => {
    if (searchMovieTimer) clearTimeout(searchMovieTimer);
    const timerId = setTimeout(async () => {
      setSelectedMovieId(null);
      setSelectedMovieData(null);
      const res = await getMoviesByName(searchedMovie);
      setSearchedMovies(res.data);
    }, 2000);
    setSearchMovieTimer(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedMovie]);

  useEffect(() => {
    async function getMovieDetailsById() {
      if (!selectedMovieId) return;
      const res = await getMovieDetails(selectedMovieId);
      setSelectedMovieData(res.data);
    }
    if (selectedMovieId) getMovieDetailsById();
  }, [selectedMovieId]);

  // useEffect(() => {
  //   worker.start();
  // }, []);

  return (
    <>
      <div className="App">
        <h1 className="title">Incubees Cinephile App</h1>
        <input
          type="text"
          placeholder="Search your favourite movie"
          onChange={(e) => setSearchedMovie(e.target.value)}
          className="search-bar"
        />

        <div className="title">
          {selectedMovieData && (
            <MovieDetailsCard
              {...selectedMovieData}
              name={
                searchedMovies?.filter((item) => item.id === selectedMovieId)[0]
                  .name
              }
            />
          )}
        </div>
        <div className="movie-card-container">
          {searchedMovies &&
            searchedMovies.map((item) => (
              <MovieCard
                key={item.id}
                {...item}
                image={`https://image.tmdb.org/t/p/original/${item.image}`}
                onClick={() => setSelectedMovieId(item.id)}
              />
            ))}
        </div>
      </div>

      <style jsx>{`
        .movie-card-container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .search-bar {
          width: 70vw;
          padding: 16px;
          margin-bottom: 16px;
        }

        .title {
          color: white;
          font-size: 36px;
        }
      `}</style>
    </>
  );
}

export default App;
