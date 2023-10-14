import React, { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import Context from "../context/Context";
import ExerciseCard from "../components/ExerciseCard";
import { CiDumbbell } from "react-icons/ci";

const ExercisesPage = () => {
  const [itemOffset, setItemOffset] = useState(1);
  const [isFiltered, setIsFiltered] = useState(false);
  const [FilteredItems, setFilterItems] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);

  const {
    data: items,
    loading,
    bodyPart,
    target,
    equipment,
  } = useContext(Context);

  const handleSelectChange = (e) => {
    if (e.target.value === "") return;
    if (e.target.value === "all") {
      setFilterItems([]);
      setIsFiltered(false);
    } else {
      setFilterItems([]);
      setItemOffset(1);
      setTimeout(() => {
        setFilterItems(
          items?.filter(
            (item) =>
              item.equipment === e.target.value ||
              item.bodyPart === e.target.value ||
              item.target === e.target.value
          )
        );
        setIsFiltered(true);
      }, 100);
    }
  };

  //pagination
  const itemsPerPage = 9;
  const endOffset = itemOffset + itemsPerPage;
  let currentItems = isFiltered
    ? FilteredItems.slice(itemOffset, endOffset)
    : items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(
    (isFiltered ? FilteredItems.length : items?.length) / itemsPerPage
  );

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setPageLoading(true);
    setTimeout(() => {
      setPageLoading(false);
    }, 200);
    const newOffset =
      (event.selected * itemsPerPage) %
      (isFiltered ? FilteredItems.length : items?.length);

    setItemOffset(newOffset);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full flex flex-col items-center mb-5 mt-[6rem]">
      <h3 className="font-ops">All exercises you need</h3>
      <div>
        <select
          onChange={handleSelectChange}
          id="equipments"
          className="rounded px-1 py-2 outline-none m-2 bg-transparent focus:text-[white] focus:bg-[var(--primary-color)] border border-[var(--primary-color)]"
        >
          <option className="font-ops" value="">
            Equipments
          </option>
          <option value="all">All Equipments</option>
          {equipment?.map((item, id) => (
            <option key={id + 1} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          onChange={handleSelectChange}
          id="bodyparts"
          className="rounded px-1 py-2 outline-none m-2 bg-transparent focus:text-[white] focus:bg-[var(--primary-color)] border border-[var(--primary-color)]"
        >
          <option className="font-ops" value="">
            BodyParts
          </option>
          <option value="all">All Parts</option>
          {bodyPart?.map((item, id) => (
            <option key={id + 40} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          onChange={handleSelectChange}
          id="target"
          className="rounded px-1 py-2 outline-none m-2 bg-transparent focus:text-[white] focus:bg-[var(--primary-color)] border border-[var(--primary-color)]"
        >
          <option className="font-ops" value="">
            Target Muscles
          </option>
          <option value="all">All Targets</option>
          {target?.map((item, id) => (
            <option key={id + 80} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <div className="flex justify-center h-[400px] items-center">
          <CiDumbbell className="animate-spin text-[1.7rem]" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
          {pageLoading ? (
            <div className="flex justify-center h-[400px] items-center">
              <CiDumbbell className="animate-spin text-[1.7rem]" />
            </div>
          ) : (
            currentItems?.map((item, key) => (
              <ExerciseCard
                key={key}
                selectedPart={item}
                width="w-[17rem] sm:w-[20rem]"
              />
            ))
          )}
        </div>
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        containerClassName="flex gap-3 flex-wrap mx-2"
        pageClassName="border border-[var(--primary-color)] py-1 px-2 rounded-lg"
        activeClassName="bg-[var(--primary-color)] text-white"
        disabledClassName="text-[grey]"
        nextClassName="border border-[var(--primary-color)] py-1 px-2 rounded-lg"
        previousClassName="border border-[var(--primary-color)] py-1 px-2 rounded-lg"
      />
    </div>
  );
};

export default ExercisesPage;
