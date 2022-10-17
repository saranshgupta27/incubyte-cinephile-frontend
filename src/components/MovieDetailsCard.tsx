import React from "react";
import { formatMinutes } from "../utils/helpers";

function MovieDetailsCard({
  overview,
  originalLanguage,
  duration,
  image,
  name,
}: {
  overview: string;
  originalLanguage: string;
  duration: number;
  image: string;
  name?: string;
}) {
  return (
    <div className="movie-details-card-container">
      <h4>{name}</h4>
      <p className="heading-movie">Overview</p>
      <p className="heading-value">{overview}</p>
      <p className="heading-movie">originalLanguage</p>
      <p className="heading-value">{originalLanguage}</p>
      <p className="heading-movie">Duration</p>
      <p className="heading-value">{formatMinutes(duration)}</p>

      <style jsx>{`
        .movie-details-card-container {
          max-width: 80vw;
          margin-left: auto;
          margin-right: auto;
        }

        .heading-movie {
          font-size: 14px;
        }
        .heading-value {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}

export default MovieDetailsCard;
