import React, { useState } from "react";

const AddMovie = (props) => {
  const [moviename, setMoviename] = useState("");
  const [moviedescription, setMoviedescription] = useState("");
  const [movieyear, setMovieyear] = useState("");
  const [movierate, setMovierate] = useState("");
  const [movieduration, setMovieduration] = useState("");
  const [movieimage, setMovieimage] = useState("");


  const addMovoie =()=>{
    props.AddMovieParent({
      moviename,
      movieimage,
      movieduration,
      movieyear,
      moviedescription,
      movierate,
    })
  }
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary "
        data-toggle="modal"
        data-target="#exampleModal"
        style={{ width: "350px", height: "410px", marginTop: "10px" }}
      >
        Add Movie
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Movie
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body modal-content">
              <input
                type="text"
                placeholder="Type the name of the movie"
                onChange={(event) => setMoviename(event.target.value)}
                value={moviename}
              />
              <input
                type="text"
                placeholder="Type the description of the movie"
                onChange={(event) => setMoviedescription(event.target.value)}
                value={moviedescription}
              />
              <input
                type="text"
                placeholder="Type the year of the movie"
                onChange={(event) => setMovieyear(event.target.value)}
                value={movieyear}
              />
              <input
                type="text"
                placeholder="Type the rate of the movie"
                onChange={(event) => setMovierate(event.target.value)}
                value={movierate}
              />
              <input
                type="text"
                placeholder="Type the duration of the movie"
                onChange={(event) => setMovieduration(event.target.value)}
                value={movieduration}
              />
              <input
                type="text"
                placeholder="Type the image of the movie"
                onChange={(event) => setMovieimage(event.target.value)}
                value={movieimage}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={()=>
                  addMovoie()
                }
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddMovie;
