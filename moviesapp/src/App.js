import React, {useEffect, useState} from "react";
import "./App.css";
import Movie from "./components/Movie";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
 const IMG_API = "https://image.tmdb.org/t/p/w1280"; 
 const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  // const movies = ['1','2','3'];
  const[movies, setMovies] = useState([]);

  useEffect( async() => {

    const moviesResp = await fetch(FEATURED_API);
    const moviesR = await moviesResp.json();

    setMovies(moviesR);

  },[]);


  return (
    <div className="App">
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}

export default App;
