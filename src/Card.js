import React, {forwardRef} from 'react';
import './Card.css';
import TextTruncate from "react-text-truncate";
import {LikeOutlined} from "@ant-design/icons";

const Card = forwardRef(({ movie }, ref) => {

  return (
    <div ref={ref} className="card">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title || movie.original_name}
      />
      <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="card__stats">
        <LikeOutlined /> {movie.vote_count}
      </p>
    </div>
  );
});

export default Card;