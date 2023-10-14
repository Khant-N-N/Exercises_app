import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ selectedPart, width }) => {
  const { gifUrl, bodyPart, id, name, target } = selectedPart;

  return (
    <Link
      data-aos="flip-left"
      onClick={() => window.scrollTo(0, 0)}
      to={`/exerciseDetail/${id}`}
      className={`${width} bg-[var(--card-bg)] rounded-lg shadow-lg hover:scale-[1.1]`}
      id={id}
    >
      <div className="w-full">
        <img
          src={gifUrl}
          alt="name"
          className="w-full h-auto rounded-lg"
          loading="lazy"
        />
      </div>
      <p className="flex justify-center bg-[var(--secondary-color)] text-[1rem] w-full">
        <span className="text-white px-4 py-2 border rounded-l">
          {bodyPart}
        </span>
        <span className="text-white px-4 py-2 border rounded-r">{target}</span>
      </p>
      <p className="text-center my-3 font-ale w-full">{name}</p>
    </Link>
  );
};

export default ExerciseCard;
