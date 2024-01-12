import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "./../../redux/books/actionCreators";
import booksData from "./../../data/books.json";
import "./BookForm.css";

function BookForm() {
  const [title, setTitle] = useState("");
  const [autor, setAutor] = useState("");
  const dispatch = useDispatch();

  const hendlleSubmit = (e) => {
    e.preventDefault();

    if (title && autor) {
      const book = {
        title,
        autor,
        id: uuidv4(),
        isFavorite: false,
      };

      dispatch(addBook(book));

      setTitle("");
      setAutor("");
    }
  };

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);

    const randomBook = booksData[randomIndex];

    const randomBookWithID = {
      ...randomBook,
      id: uuidv4(),
      isFavorite: false,
    };

    dispatch(addBook(randomBookWithID));
  };

  return (
    <div className="app-block book-form">
      <h2>Add new book</h2>
      <form onSubmit={hendlleSubmit}>
        <div className="book-form">
          <label htmlFor="title" className="title-input__lable">
            Book Name:
          </label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="title-autor">
          <label htmlFor="autor" className="title-autor__lable">
            Autor Name:
          </label>
          <input type="text" id="autor" value={autor} onChange={(e) => setAutor(e.target.value)} />
        </div>
        <button className="submit-btn" type="submit">
          Add Book
        </button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random Book
        </button>
      </form>
    </div>
  );
}

export default BookForm;
