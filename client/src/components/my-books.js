import React, { Component } from "react";
import "../../style/style.scss";

export default class MyBooks extends Component {
  render() {
    return (
      <div class="main">
        <h1>My Books</h1>
        <div class="row">
          {/* foreach(book in books) */}
          <div class="col">
            <a class="bookCard" href="/books/:bookID">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg"
                alt="book"
                width="100%"
              />
              <h4>The Cat in the Hat</h4>
            </a>
          </div>
          <div class="col">
            <a class="bookCard" href="/books/:bookID">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81TSB6zIIQL._AC_UL200_SR200,200_.jpg"
                alt="book"
                width="100%"
              />
              <h4>One Fish Two Fish Red Fish Blue Fish</h4>
            </a>
          </div>
          <div class="col">
            <a class="bookCard" href="/books/:bookID">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81kdwZtIGbL._AC_UL200_SR200,200_.jpg"
                alt="book"
                width="100%"
              />
              <h4>Green Eggs and Ham</h4>
            </a>
          </div>
          <div class="col">
            <a class="bookCard" href="/books/:bookID">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81YsKZ7EuWL._AC_UL200_SR200,200_.jpg"
                alt="book"
                width="100%"
              />
              <h4>Oh, the Places You'll Go! </h4>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
