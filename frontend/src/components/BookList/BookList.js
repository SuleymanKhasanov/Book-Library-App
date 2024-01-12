import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/actionCreators";
import "./BookList.css";

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p className="No-availble-books">No available books</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={book.id} className="book-list">
              <div className="book-info">
                {++index}. {book.title} by <strong>{book.autor}</strong>
              </div>
              <button
                className="book-actions"
                id={book.id}
                onClick={() => handleDeleteBook(book.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
