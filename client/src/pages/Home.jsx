import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineAddBox } from "react-icons/md";
import Spinner from "./components/Spinner";
import { Link } from "react-router-dom";
import BooksTable from "./components/home/BooksTable";
import BooksCard from "./components/home/BooksCard"

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showtype, setShowtype] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/books")
      .then((response) => {
        setBooks(response.data.books);
        setLoading(false);
        console.log(response.data.books);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center">
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg mx-2" onClick={() => setShowtype("card")}>Card</button>
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowtype("table")}>Table</button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 font-semibold shadow-lg shadow-black rounded-full p-4">
          Books List
        </h1>
        <Link to={"/books/create"}>
          <MdOutlineAddBox className="text-sky-500 text-4xl" />
        </Link>
      </div>
      {loading ? <Spinner /> : showtype === 'table' ? (<BooksTable books={books}  />) : <BooksCard books={books}/>}
    </div>
  );
};

export default Home;
