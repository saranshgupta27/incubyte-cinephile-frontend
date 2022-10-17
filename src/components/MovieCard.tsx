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
  return (
    <>
      <div className="container" onClick={onClick} role="button">
        <p className="movieTitle">{name}</p>
        <img
          src={image}
          alt={name}
          onError={(e) =>
            (e.currentTarget.src =
              "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg")
          }
        />
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
          transform: scale(1.05);
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
