import React from "react";

const Book = ({ img, title, author }) => {
    return (
      <article className="book">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h2>{author}</h2>
      </article>
    )
}

export default Book;