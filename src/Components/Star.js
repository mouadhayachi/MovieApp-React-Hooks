import React from "react";
import StarFiled from "../Constants/filedstar.svg";
import EmptyStar from "../Constants/EmptyStar.svg";

function Star(props) {
  const fillStar = () => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      i < props.moviestar
        ? arr.push(
            <span onClick={() => props.SearchedStarsParent(i + 1)}>
              <img
                src={StarFiled}
                style={{ height: "25px", width: "25px" }}
                alt="filedstar"
              />
            </span>
          )
        : arr.push(
            <span key={i} onClick={() => props.SearchedStarsParent(i + 1)}>
              <img
                src={EmptyStar}
                style={{ height: "25px", width: "25px" }}
                alt="emptystar"
              />
            </span>
          );
    }
    return arr;
  };
  return <div>{fillStar()}</div>;
}
export default Star;
