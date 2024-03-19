export const ListPagination = ({ gotoPage, page, pageDetails }) => {
  return (
    <section className="container mx-auto mt-8 ">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4 transition-all duration-1000 dark:bg-gray-800 ">
        <button
          className={`${
            page === 'first'
              ? 'text-blue-500 hover:text-gray-400'
              : 'text-gray-400 hover:text-blue-500'
          }`}
          onClick={() => gotoPage('first')}
        >
          First
        </button>
        <button
          className={`${
            page === 'prev'
              ? 'text-blue-500 hover:text-gray-400'
              : 'text-gray-400 hover:text-blue-500'
          }`}
          onClick={() => gotoPage('prev')}
        >
          Previous
        </button>
        <span className="text-gray-400">{pageDetails}</span>
        <button
          className={`${
            page === 'next'
              ? 'text-blue-500 hover:text-gray-400'
              : 'text-gray-400 hover:text-blue-500'
          }`}
          onClick={() => gotoPage('next')}
        >
          Next
        </button>
        <button
          className={`${
            page === 'last'
              ? 'text-blue-500 hover:text-gray-400'
              : 'text-gray-400 hover:text-blue-500'
          }`}
          onClick={() => gotoPage('last')}
        >
          Last
        </button>
      </div>
    </section>
  )
}
