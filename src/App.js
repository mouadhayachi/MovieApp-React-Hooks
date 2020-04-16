import React, { useState } from "react";
import "./App.css";

import { Movies } from "./Constants/Data";
import Navbar from "./Components/Navbar";
import MovieList from "./Components/MovieList";

const App = () => {
  const [movieList, setMovieList] = useState(Movies);
  const [searchedItem, setSearchedItem] = useState("");
  const [starsNumber, setStarsNumber] = useState(0);

  const AddMovieParent = (newmovie) => {
    setMovieList([...movieList, newmovie]);
  };

  const SearchMovieParent = (keyword) => {
    setSearchedItem(keyword);
  };

  const SearchedStarsParent = (starsNumber) => {
    setStarsNumber(starsNumber);
  };

  return (
    <div>
      <Navbar
        SearchMovieParent={SearchMovieParent}
        SearchedStarsParent={SearchedStarsParent}
        starsNumber={starsNumber}
      />
      <MovieList
        movieList={movieList}
        AddMovieParent={AddMovieParent}
        searchedItem={searchedItem}
        starsNumber={starsNumber}
        SearchedStarsParent={SearchedStarsParent}
      />
      <p className="copyright"> © Copyright 2020 ©</p>
      <p className="copyright">
        All Rights Reserved. Powered by Mouadh Ayachi
      </p>
    </div>
  );
};
export default App;
