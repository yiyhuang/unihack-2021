import React, { Component, useState } from "react";
import "../../style/style.scss";
import { FlipCard } from "../functions/FlipCard.js";
import other_books from "../data/other-books.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 class="title">Books recommended for you!</h1>
        <h1 class="subtitle">
          Press the like button to start your book exchange journey!
        </h1>
        <BookCardStack />
      </div>
    );
  }
}

function HomeBookCard(props) {
  return (
    <FlipCard
      title={props.currentBook.title}
      imageSrc={props.currentBook.imgSrc}
      description={props.currentBook.description}
    />
  );
}

function BookCardStack() {
  const [index, setIndex] = useState(0);
  var currentBook = other_books[index];

  const likeButton =
    currentBook.liked === true ? (
      <button class="button is-large is-light is-focused is-danger">
        <span class="icon">
          <img src="../img/icon_heart.png" alt="like" />
        </span>
      </button>
    ) : (
      <button class="button is-large">
        <span class="icon">
          <img src="../img/icon_heart.png" alt="like" />
        </span>
      </button>
    );

  const prevButton =
    index === 0 ? null : (
      <button class="button is-large" onClick={() => setIndex(index - 1)}>
        <span class="icon">
          <img src="../img/icon_arrow_left.png" alt="previous" />
        </span>
      </button>
    );

  const nextButton =
    index === other_books.length - 1 ? null : (
      <button class="button is-large" onClick={() => setIndex(index + 1)}>
        <span class="icon">
          <img src="../img/icon_arrow_right.png" alt="next" />
        </span>
      </button>
    );

  return (
    <div>
      <div class="columns is-vcentered">
        <div class="column has-text-right">{prevButton}</div>
        <center>
          <div class="column has-text-centered">
            <HomeBookCard currentBook={currentBook} />
          </div>
        </center>
        <div class="column has-text-left">{nextButton}</div>
      </div>
      <div class="has-text-centered p-6">{likeButton}</div>
    </div>
  );
}
