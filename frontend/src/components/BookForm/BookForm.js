import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "./../../redux/books/actionCreators";
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
      };

      dispatch(addBook(book));

      setTitle("");
      setAutor("");
    }
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookForm;
