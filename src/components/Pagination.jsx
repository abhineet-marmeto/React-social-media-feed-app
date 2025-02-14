import { useContext } from "react";
import { PostContext } from "../context/PostContext";

const Pagination = () => {
  const { currentPage, totalPages, setCurrentPage } = useContext(PostContext);

  return (
    <div className="flex justify-center mt-4 gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
