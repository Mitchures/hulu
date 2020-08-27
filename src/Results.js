import React, {useEffect, useState} from 'react';
import './Results.css';
import Card from "./Card";
import axios from './axios';
import FlipMove from 'react-flip-move';

function Results({ selected }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(selected);
      setMovies(request.data.results);
      return request;
    };

    fetchData()
  }, [selected]);

  return (
    <div className="results">
      {movies.map(movie => (
        <FlipMove key={movie.id}>
          <Card movie={movie}/>
        </FlipMove>
      ))}
    </div>
  );
}

export default Results;