import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiDumbbell } from "react-icons/ci";
import Context from "../context/Context";
import RowComponent from "../components/RowComponent";

const ExerciseDetailPage = () => {
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState([]);

  const { data, loading } = useContext(Context);
  useEffect(() => {
    setDataDetail(data?.filter((data) => data.id === id)[0]);
  }, [data, id]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center h-[400px] items-center">
          <CiDumbbell className="animate-spin text-[1.7rem]" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center my-3">
          <div className="w-[90%] md:w-[70%] mx-auto">
            <img
              src={dataDetail?.gifUrl}
              alt={dataDetail?.name}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="flex w-[90%] mx-auto flex-col my-5 items-center justify-center md:items-start px-2 font-ops">
            <h3 className="text-[1.5rem]">{dataDetail?.name?.toUpperCase()}</h3>
            <p className="text-[var(--primary-color)]">
              ({dataDetail?.equipment})
            </p>
            <p>
              BodyPart :{" "}
              <span className="font-['Roboto'] text-[var(--primary-color)] font-bold">
                {dataDetail?.bodyPart}
              </span>
            </p>
            <p>
              Target :{" "}
              <span className="font-['Roboto'] text-[var(--primary-color)] font-bold">
                {dataDetail?.target}
              </span>
            </p>
            <div>
              <p className="text-center md:text-left">Instruction :</p>
              <ul className="font-['Roboto'] text-[var(--primary-color)] font-bold">
                {dataDetail?.instructions?.map((instru, id) => (
                  <li key={id + 1}>
                    {id + 1}. {instru}
                  </li>
                ))}
              </ul>
            </div>
            <p>
              Secondary muscles :{" "}
              <span className="font-['Roboto'] text-[var(--primary-color)] font-bold">
                {dataDetail?.secondaryMuscles?.map((muscle) => muscle + ", ")}
              </span>
            </p>
          </div>
        </div>
      )}
      <hr />
      <h2 className="text-[1.4rem] md:text-[2rem] font-ops mt-6 px-3">
        Other exercises that hit the same muscle:{" "}
      </h2>
      <RowComponent part={dataDetail?.bodyPart} type="bodyPart" ids="muscle" />
      <hr />
      <h2 className="text-[1.4rem] md:text-[2rem] font-ops mt-6 px-3">
        Other exercises that uses the same equipment:{" "}
      </h2>
      <RowComponent
        part={dataDetail?.equipment}
        type="equipment"
        ids="equiment"
      />
    </div>
  );
};

export default ExerciseDetailPage;
