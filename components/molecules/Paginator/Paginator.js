export default function Paginator({
  page,
  totalPages,
  nextPageButton,
  previousPageButton,
  previousButtonDisabled,
  nexButtonDisabled,
}) {
  return (
    <nav
      className="flex justify-between items-center py-4"
      aria-label="Paginator"
    >
      <span className="text-sm font-normal text-gray-500 ">
        Showing Page{" "}
        <span className="font-semibold text-gray-900 ">{page}</span> of{" "}
        <span className="font-semibold text-gray-900 ">{totalPages}</span>
      </span>

      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={previousPageButton}
            disabled={previousButtonDisabled}
            className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 disabled:text-gray-300 disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:hover:text-gray-300"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        </li>

        <li>
          <button
            onClick={nextPageButton}
            disabled={nexButtonDisabled}
            className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 disabled:text-gray-300 disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:hover:text-gray-300"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
