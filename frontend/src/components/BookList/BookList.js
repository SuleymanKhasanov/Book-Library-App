import React from "react";
import { useSelector } from "react-redux";
import "./BookList.css";

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>No avalible books</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <div className="book-info">
                {++index}. {book.title} by <strong>{book.autor}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
