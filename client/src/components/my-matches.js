import React, { Component } from "react";
import "../../style/style.scss";
import my_books from "../data/my-books";
import other_books from "../data/other-books";
import { FlipCard } from "../functions/FlipCard";

export default class MyMatches extends Component {
  render() {
    return (
      <div>
        <h1 class="title">My Matches</h1>
        <div class="columns is-multiline">
          {other_books
            .filter((book) => book.liked === true)
            .map((matchedBook) => (
              <div class="column">
                <FlipCard
                  title={matchedBook.title}
                  imageSrc={matchedBook.imgSrc}
                  description={matchedBook.description}
                />
                owned by <i>{matchedBook.owner}</i>
              </div>
            ))}
          <div class="column has-text-centered">
            <button class="button is-large">
              <span class="icon">
                <i class="fas fa-exchange-alt"></i>
              </span>
            </button>
          </div>
          <div class="column has-text-left">
            <FlipCard
              title={my_books[2].title}
              imageSrc={my_books[2].imgSrc}
              description={my_books[2].description}
            />
          </div>
        </div>
      </div>
    );
  }
}
