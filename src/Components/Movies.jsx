import React, { useState, useEffect } from "react";
import "./CSS folder/Movies.css";
function Movies() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const fetchData = () => {
    setLoading(true);
    return fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setEntries(data.entries);
        setLoading(false);
      })
      .catch(() => {
        console.log("error");
        setErr("Oops, something went wrong...");
        setLoading(false);
      });
  };

  const arr = entries.filter(
    (val) => val.programType === "movie" && val.releaseYear >= 2010
  );

  const sortedMovies = arr
    .sort((t1, t2) => (t1.title < t2.title ? 1 : -1))
    .reverse()
    .slice(0, 21);
  console.log(sortedMovies);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="movies">
      <div className="title">
        <h2>Popular Movies</h2>
      </div>
      {err ? (
        <div className="error">
          <h3>{err}</h3>
        </div>
      ) : loading ? (
        <div className="loader">
          <h3>Loading...</h3>
        </div>
      ) : (
        <div className="movies_list">
          {sortedMovies.map((i, idx) => (
            <div key={idx} className="card">
              <img
                src={i.images["Poster Art"].url}
                alt="Posters"
                className="poster"
              />
              <p>{i.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;
