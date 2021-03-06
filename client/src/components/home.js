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
            <button class="button is-large">
              <span class="icon">
                <img
                  src="../img/icon_arrow_left.png"
                  alt="previous"
                  width="100%"
                />
              </span>
            </button>
          </div>
          <div class="column">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="card">
                    <a class="card-image" href="/#my-books/:bookID">
                      <figure class="image is-6by7">
                        <img
                          src="https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg"
                          alt="book"
                          width="100%"
                        />
                      </figure>
                    </a>
                    <div class="card-content">
                      <h2 class="subtitle">The Cat in the Hat</h2>
                    </div>
                  </div>
                </div>
                <div class="flip-card-back">
                  <h1>
                    Chosen for a virtual lockdown read from us grandparents to 2
                    year old grand daughter. Poetic, fun to read, and a naughty
                    cat story that puts everything right before mum comes home.
                    A great bedtime reading choice.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="column has-text-left">
            <button class="button is-large">
              <span class="icon">
                <img
                  src="../img/icon_arrow_right.png"
                  alt="next"
                  width="100%"
                />
              </span>
            </button>
          </div>
        </div>

        <div class="has-text-centered">
          <button class="button is-large">
            <span class="icon">
              <img src="../img/icon_heart.png" alt="like" width="100%" />
            </span>
          </button>
        </div>
      </div>
    );
  }
}
