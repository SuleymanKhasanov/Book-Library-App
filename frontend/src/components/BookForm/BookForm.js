import React from "react";
import { useState } from "react";
import "./BookForm.css";

function BookForm() {
  const [title, setTitle] = useState("");
  const [autor, setAutor] = useState("");

  const hendlleSubmit = (e) => {
    e.preventDefault();

    if (title && autor) {
      setTitle("");
      setAutor("");
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Add new book</h2>
      <form onSubmit={hendlleSubmit}>
        <div className="book-form">
          <label htmlFor="title-input__text" className="title-input__lable">
            Book Name:
          </label>
          <input
            type="text"
            id="title-input__text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="title-autor">
          <label htmlFor="title-autor__text" className="title-autor__lable">
            Autor Name:
          </label>
          <input
            type="text"
            id="title-autor__text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default BookForm;
