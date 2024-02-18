import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const BooksTable = ({ books }) => {
  return (
    <div>
      {" "}
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-salt-600 rounded-md">No</th>
            <th className="border border-salt-600 rounded-md">Title</th>
            <th className="border border-salt-600 rounded-md max-md:hidden">
              Author
            </th>
            <th className="border border- salt-600 rounded-md max-md:hidden">
              Publish Year
            </th>
            <th className="border border- salt-600 rounded-md">Oprations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="j-8">
              <td className="border border-salt-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-salt-700 rounded-md text-center">
                {book.title}
              </td>
              <td className="border border-salt-700 rounded-md text-center max-md:hidden">
                {book.author}
              </td>
              <td className="border border-salt-700 rounded-md text-center max-md:hidden">
                {book.publishYear}
              </td>
              <td className="border border-salt-700 rounded-md text-center">
                <div className="flex justify-center gap-4">
                  <Link
                    to={`/books/details/${book._id}`}
                    className="text-green-800"
                  >
                    <BsInfoCircle />
                  </Link>
                  <Link
                    to={`/books/edit/${book._id}`}
                    className="text-yellow-600"
                  >
                    <AiOutlineEdit />
                  </Link>
                  <Link
                    to={`/books/delete/${book._id}`}
                    className="text-red-600"
                  >
                    <MdOutlineDelete />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
