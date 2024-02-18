import React, { useState } from "react";
import BackBotton from "./components/BackBotton";
import Spinner from "./components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishYear, setPublishYear] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const saveBoks = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:4000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Boook Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        alert("An error occurred" + err.message);
        setLoading(false);
        enqueueSnackbar("Error Boook not Created successfully", {
          variant: "error",
        });
      });
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="absolute left-5 top-5">
        <BackBotton />
      </div>
      <h1 className="text-3xl my-8 font-semibold shadow-lg shadow-black rounded-full p-4">
        Create Book
      </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          ></input>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          ></input>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">PublishYear</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          ></input>
        </div>
        <button
          className="p-4 bg-sky-300 my-6 capitalize text-white w-full rounded-xl font-semibold"
          onClick={saveBoks}
        >
          Save Post
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
