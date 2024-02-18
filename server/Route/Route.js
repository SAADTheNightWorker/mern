import express from "express";
import { Book } from "./model/model.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(404).send("fill all the required fields");
    }
    const newbook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newbook);
    return res.status(200).send(book);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  const getAll = await Book.find({});
  try {
    return res.status(200).json({
      count: getAll.length,
      books: getAll,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const findOne = await Book.findById(id);
    res.status(200).send(findOne);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.messaage);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, publishYear } = req.body;
  try {
    if ((!title, !author, !publishYear)) {
      return res.status(404).send("fill all the required fields");
    }
    const update = await Book.findByIdAndUpdate(id, req.body);
    return res.status(200).send(update);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBook = await Book.findByIdAndDelete(id);
    return res.status(200).send(deleteBook);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
});

export default router;
