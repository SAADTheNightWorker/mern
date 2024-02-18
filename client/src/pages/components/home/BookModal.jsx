import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute top-6 text-3xl right-6 bg-red-600 rounded-lg"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
          asperiores atque voluptatibus consectetur neque iste nobis officia qui
          repellat voluptatum dolores nam vitae ullam, beatae unde! Quo fugiat
          praesentium odio.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
