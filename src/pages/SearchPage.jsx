import React from "react";
import { useContext } from "react";
import Context from "../context/Context";
import ExerciseCard from "../components/ExerciseCard";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { CiDumbbell } from "react-icons/ci";

const SearchPage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageLoading, setPageLoading] = useState(false);
  const { searchItems, searchRef } = useContext(Context);

  //pagination
  const itemsPerPage = 9;
  const endOffset = itemOffset + itemsPerPage;
  let currentItems = searchItems?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(searchItems?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setPageLoading(true);
    setTimeout(() => {
      setPageLoading(false);
    }, 200);

    const newOffset = (event.selected * itemsPerPage) % searchItems?.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="w-full flex flex-col items-center mb-5 mt-[6rem]">
      <h3 className="text-left px-3 w-full">
        Searched for:{" "}
        <span className="text-[var(--primary-color)]">
          {searchRef.current.value}
        </span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
        {currentItems.length === 0 && (
          <div className="col col-span-full h-[60vh] flex items-center">
            No results found!
          </div>
        )}
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

export default SearchPage;
