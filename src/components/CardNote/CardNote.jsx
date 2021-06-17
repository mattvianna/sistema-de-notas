import React, { Component } from "react";
import "./CardNote.css";

class CardNote extends Component {
  render() {
    return (
      <div className="card__note">
        <header>
          <h2>Título</h2>
        </header>
        <p>Alguma nota</p>
      </div>
    );
  }
}

export default CardNote;
