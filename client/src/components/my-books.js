import React, { Component } from "react";
import "../../style/style.scss";
import books from "../data/books";

export default class MyBooks extends Component {
  render() {
    return (
      <div class="main">
        <h1 class="title">My Books</h1>
        <div class="columns">
          {/* foreach(book in books) */}
          {/* {books.map((book)=>   )} */}

          {/* <div class="column">
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
          </div> */}

          <div class="column">
            <div class="card">
              <a class="card-image" href="/#my-books/:bookID">
                <figure class="image is-6by7">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/81TSB6zIIQL._AC_UL200_SR200,200_.jpg"
                    alt="book"
                    width="100%"
                  />
                </figure>
              </a>
              <div class="card-content">
                <h2 class="subtitle">One Fish Two Fish Red Fish Blue Fish</h2>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <a class="card-image" href="/#my-books/:bookID">
                <figure class="image is-6by7">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/81kdwZtIGbL._AC_UL200_SR200,200_.jpg"
                    alt="book"
                    width="100%"
                  />
                </figure>
              </a>
              <div class="card-content">
                <h2 class="subtitle">Green Eggs and Ham</h2>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <a class="card-image" href="/#my-books/:bookID">
                <figure class="image is-6by7">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/81YsKZ7EuWL._AC_UL200_SR200,200_.jpg"
                    alt="book"
                    width="100%"
                  />
                </figure>
              </a>
              <div class="card-content">
                <h2 class="subtitle">Oh, the Places You'll Go!</h2>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <a class="card-image" href="/#my-books/:bookID">
                <figure class="image is-6by7">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/81YsKZ7EuWL._AC_UL200_SR200,200_.jpg"
                    alt="book"
                    width="100%"
                  />
                </figure>
              </a>
              <div class="card-content">
                <h2 class="subtitle">Oh, the Places You'll Go!</h2>
              </div>
            </div>
          </div>
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
          <img
            src={props.imgSrc}
            alt={props.imgSrc}
            width="100%"
          />
        </figure>
      </a>
      <div class="card-content">
        <h2 class="subtitle">The Cat in the Hat</h2>
      </div>
    </div>
  );
}
