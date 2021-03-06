import React, { Component } from "react";
import "../../style/style.scss";
import books from "../data/my-books";
import { FlipCard } from "../functions/FlipCard";

export default class MyBooks extends Component {
  render() {
    return (
      <div>
        <h1 class="title">My Books</h1>
        <div class="columns">
          {books.map((book) => (
            <div class="column">
              <FlipCard
                title={book.title}
                imageSrc={book.imgSrc}
                description={book.description}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function BookCard(props) {
  return (
    <div class="card">
      <a class="card-image" href="/#my-books/:bookID">
        <figure class="image is-6by7">
          <img src={props.imgSrc} alt={props.imgSrc} width="100%" />
        </figure>
      </a>
      <div class="card-content">
        <h2 class="subtitle">The Cat in the Hat</h2>
      </div>
    </div>
  );
}
