import React, { useState } from "react";
import Spinner from "./components/Spinner";
import BackButton from "./components/BackBotton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:4000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book delete successfully",  { variant: "success" })
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        alert("An error occurred while deleting");
        setLoading(false);
        enqueueSnackbar("Error wile deleting",  { variant: "erorr" })
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-8 font-semibold shadow-lg shadow-black rounded-full p-4 mx-auto w-fit">
        Delete Book
      </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 shadow-md shadow-black w-[600px] rounded-xl mx-auto p-8">
        <h3 className="capitalize text-2xl">
          are you shur you wante to delete this book
        </h3>
        <button
          onClick={handleDelete}
          className="capitalize bg-red-500 text-white m-8 w-full p-4 rounded-xl font-semibold"
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
