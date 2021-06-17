import React, { Component } from "react";
import ListNote from "./components/ListNote/ListNote";
import FormRegister from "./components/FormRegister/FormRegister";

class App extends Component {
  render() {
    return (
      <>
        <FormRegister />
        <ListNote />
      </>
    );
  }
}

export default App;
