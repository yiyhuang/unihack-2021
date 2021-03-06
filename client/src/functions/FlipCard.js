import React from "react";

export function FlipCard(props) {
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

