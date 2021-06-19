import React, { Component } from "react";
import CardNote from "../CardNote";
import "./ListNote.css";

class ListNote extends Component {
  render() {
    return (
      <ul className="list-wrap">
        {this.props.notes.map((note, index) => {
          return (
            <li key={index}>
              <CardNote
                category={note.category}
                title={note.title}
                text={note.text}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListNote;
