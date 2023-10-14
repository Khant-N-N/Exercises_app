import React, { useContext, useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import Context from "../context/Context";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { CiDumbbell } from "react-icons/ci";

const RowComponent = ({ part, type, ids }) => {
  const { data } = useContext(Context);
  const [rowData, setRowData] = useState([]);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);
  const handleScrollRight = () => {
    document.getElementById(ids).scrollLeft += 300;
  };
  const handleScrollLeft = () => {
    document.getElementById(ids).scrollLeft -= 300;
  };

  const handleScroll = () => {
    const containerWidth = document.getElementById(ids).offsetWidth;
    const scrollPosition = document.getElementById(ids).scrollLeft;
    const scrollWidth = document.getElementById(ids).scrollWidth;

    if (scrollPosition === 0) {
      setDisableLeft(true);
    } else {
      setDisableLeft(false);
    }

    if (scrollPosition + containerWidth >= scrollWidth - 10) {
      setDisableRight(true);
    } else {
      setDisableRight(false);
    }
  };
  useEffect(() => {
    setRowData(data?.filter((item) => item[type] === part));
  }, [part, data, type]);
  return (
    <div className="relative mx-5 my-4">
      <FaCircleChevronLeft
        onClick={handleScrollLeft}
        className={`${
          disableLeft ? "text-[#7d8185]/80" : "text-[var(--primary-color)]"
        } select-none left-2 top-[45%] text-[2rem] absolute cursor-pointer z-10`}
      />
      <FaCircleChevronRight
        onClick={handleScrollRight}
        className={`${
          disableRight ? "text-[#7d8185]/80" : "text-[var(--primary-color)]"
        } select-none right-2 top-[45%] text-[2rem] absolute cursor-pointer z-10`}
      />
      <div
        id={ids}
        onScroll={handleScroll}
        className="flex overflow-x-scroll scroll-smooth overflow-y-hidden gap-x-3"
      >
        {!rowData ? (
          <div className="flex justify-center w-full items-center">
            <CiDumbbell className="animate-spin text-[1.7rem]" />
          </div>
        ) : (
          rowData.map((row, id) => (
            <ExerciseCard
              key={id + 1}
              selectedPart={row}
              width="min-w-[12rem]"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RowComponent;
