import React, { Component } from "react";
import CardNote from "../CardNote";

class ListNote extends Component {
  render() {
    return (
      <ul>
        {Array.of("categoria1", "categoria2", "categoria3").map(
          (category, index) => {
            return (
              <li key={index}>
                <span>{category}</span>
                <CardNote />
              </li>
            );
          }
        )}
      </ul>
    );
  }
}

export default ListNote;
