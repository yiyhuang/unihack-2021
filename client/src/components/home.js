import React, { Component } from "react";
import "../../style/style.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 class="title">Books recommended for you!</h1>
        <h1 class="subtitle">
          Press the like button to start your exchange journey!
        </h1>
        <div class="columns is-vcentered">
          <div class="column has-text-right">
                />
            <IconButton command="left" />
          </div>
          <div class="column">
            <FlipCard
              title="The Cat in the Hat"
              imageSrc="https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg"
              description="Chosen for a virtual lockdown read from us grandparents to 2
                    year old grand daughter. Poetic, fun to read, and a naughty
                    cat story that puts everything right before mum comes home.
                    A great bedtime reading choice."
            />
          </div>
          <div class="column has-text-left">
            <IconButton command="right" />
          </div>
        </div>
        <div class="has-text-centered">
          <IconButton command="like" />
        </div>
      </div>
    );
  }
}

function FlipCard(props) {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="card">
            <a class="card-image" href="/#my-books/:bookID">
              <figure class="image is-6by7">
                <img src={props.imageSrc} alt={props.title} />
              </figure>
            </a>
            <div class="card-content">
              <h2 class="subtitle">{props.title}</h2>
            </div>
          </div>
        </div>
        <div class="flip-card-back">
          <h1>{props.description}</h1>
        </div>
      </div>
    </div>
  );
}

function IconButton(props) {
  let returnImg;
  switch (props.command) {
    case "like":
      returnImg = (
        <button class="button is-large">
          <span class="icon">
            <img src="../img/icon_heart.png" alt="like" />
          </span>
        </button>
      );
      break;
    case "left":
      returnImg = (
        <button class="button is-large">
          <span class="icon">
            <img src="../img/icon_arrow_left.png" alt="next" />
          </span>
        </button>
      );
      break;
    case "right":
      returnImg = (
        <button class="button is-large">
          <span class="icon">
            <img src="../img/icon_arrow_right.png" alt="next" />
          </span>
        </button>
      );
  }
  return <div>{returnImg}</div>;
}
