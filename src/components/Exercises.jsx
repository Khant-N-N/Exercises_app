import React, { useContext, useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { Link } from "react-router-dom";
import { CiDumbbell } from "react-icons/ci";
import Context from "../context/Context";

const Exercises = () => {
  const [selectedPart, setSelectedPart] = useState("waist");
  const { bodyPart, data, loading } = useContext(Context);
  const [exerciseData, setExerciseData] = useState([]);

  let num = 0;

  useEffect(() => {
    setExerciseData(
      data?.filter((item) => {
        if (item.bodyPart === selectedPart && num < 10) {
          num++;
          return true;
        } else {
          return false;
        }
      })
    );
  }, [selectedPart, data]);
  return (
    <div className="mt-[3.5rem] flex flex-col items-center my-5">
      <h2 className="text-[2rem] font-ops">Exercises</h2>
      <div className="flex flex-col item-center">
        <div className="grid grid-cols-3 md:flex justify-center gap-5 my-4 mx-5">
          {bodyPart?.map((part, id) => (
            <div
              onClick={() => {
                setSelectedPart(part);
              }}
              data-aos="zoom-in"
              className={`${
                selectedPart === part &&
                "border-[var(--primary-color)] border-[3px]"
              } font-bold cursor-pointer text-center rounded px-3`}
              key={id + 1}
            >
              {part}
            </div>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center h-[400px] items-center">
          <CiDumbbell className="animate-spin text-[1.7rem]" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
          {exerciseData?.map((exercise, key) => (
            <ExerciseCard
              key={key}
              selectedPart={exercise}
              width="w-[17rem] sm:w-[20rem]"
            />
          ))}
        </div>
      )}

      <Link
        to="/exercises"
        onClick={() => window.scrollTo(0, 0)}
        className="text-[var(--primary-color)] border border-[var(--primary-color)] w-[50%] px-4 py-2 text-center rounded hover:bg-[var(--primary-color)] hover:text-white"
      >
        See More
      </Link>
    </div>
  );
};

export default Exercises;
