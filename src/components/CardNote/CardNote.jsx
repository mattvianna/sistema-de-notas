import React, { Component } from "react";
import "./CardNote.css";

class CardNote extends Component {
  render() {
    return (
      <>
        <span className="category">{this.props.category}</span>
        <div className="card">
          <header className="card__title">
            <h2>{this.props.title}</h2>
          </header>
          <article className="card__desc">
            <p className="desc">{this.props.text}</p>
          </article>
        </div>
      </>
    );
  }
}

export default CardNote;
