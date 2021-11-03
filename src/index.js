import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="main-container">
      <section className="header">
        <h1>Estante de livros</h1>
      </section>
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));