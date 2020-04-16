import React from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

const MovieList = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      {props.movieList
        .filter(
          (elt) =>
            elt.moviename
              .toUpperCase()
              .includes(props.searchedItem.toUpperCase()) &&
            elt.movierate >= props.starsNumber
        )

        .map((movie) => (
          <MovieCard
            key={movie.moviename}
            movie={movie}
            SearchedStarsParent={props.SearchedStarsParent}
          />
        ))}
      <AddMovie AddMovieParent={props.AddMovieParent} />
    </div>
  );
};

export default MovieList;
