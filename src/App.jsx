// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import SearchBox from './components/search/SearchBox';


function App() {
  const [movies, setMovies] = useState([]);
  const apiKey = 'd2bc12f34a281b5845940d02193a9ab3'


  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <div><SearchBox /></div>
      <h1>Popular Movies</h1>
      <div>
        <MovieList movies={movies} />
      </div>

    </div>
  );
}

export default App;

