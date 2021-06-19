import React, { Component } from "react";
import ListNote from "./components/ListNote";
import FormRegister from "./components/FormRegister";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  createNote(category, title, text) {
    const newNote = { category, title, text };
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes,
    };
    this.setState(newState);
  }

  render() {
    return (
      <section className="main">
        <FormRegister createNote={this.createNote.bind(this)} />
        <ListNote notes={this.state.notes} />
      </section>
    );
  }
}

export default App;
