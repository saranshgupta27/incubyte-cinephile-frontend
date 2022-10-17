import React from "react";

function MovieCard({
  name,
  image,
  id,
  releaseDate,
  onClick,
}: {
  name: string;
  image: string;
  id: number;
  releaseDate: string;
  onClick: () => void;
}) {
  if (!image) return null;

  return (
    <>
      <div className="container" onClick={onClick} role="button">
        <p className="movieTitle">{name}</p>
        <img src={`https://image.tmdb.org/t/p/original/${image}`} alt={name} />
      </div>
      <style jsx>{`
        .container {
          display: "flex";
          width: "min-content";
          width: 300px;
          cursor: pointer;
          border-radius: 16px;
          padding: 8px 8px 8px 8px;
        }
        .container:hover {
          outline: 2px solid white;
        }
        img {
          width: 200px;
        }

        .movieTitle {
          color: red;
          font-size: 18px;
          font-family: "Helvetica";
        }
      `}</style>
    </>
  );
}

export default MovieCard;
