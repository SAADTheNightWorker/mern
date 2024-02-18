import React, { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackBotton from "./components/BackBotton";
import { enqueueSnackbar } from "notistack";

const ShowBook = () => {
  const [book, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/books/${id}`)
      .then((response) => {
        setBooks(response.data);
        console.log(response.data);
        setLoading(false);
        console.log(response.data.book);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 flex flex-col items-center justify-center ">
     <div className="absolute top-5 left-5">
      <BackBotton />
     </div>
      <h1 className="text-3xl my-8 font-semibold shadow-lg shadow-black rounded-full p-4 mx-auto w-fit">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="py-4">
            <span className="text-xl mr-4 text-gray-500 font-semibold hover:text-green-500 transition-all duration-300">ID</span>
            <span>{book._id}</span>
          </div>
          <div className="mr-4 py-4">
            <span className="text-xl mr-4 text-gray-500 font-semibold hover:text-green-500 transition-all duration-300">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="mr-4 py-4">
            <span className="text-xl mr-4 text-gray-500 font-semibold hover:text-green-500 transition-all duration-300">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="mr-4 py-4">
            <span className="text-xl mr-4 text-gray-500 font-semibold hover:text-green-500 transition-all duration-300">PublishYear</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="mr-4 py-4">
            <span className="text-xl mr-4 text-gray-500 font-semibold hover:text-green-500 transition-all duration-300">CreatedAt</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="mr-4 py-4">
            <span className="text-xl mr-4 text-gray-500 font-semibold hover:text-green-500 transition-all duration-300">UpdatedAt</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
