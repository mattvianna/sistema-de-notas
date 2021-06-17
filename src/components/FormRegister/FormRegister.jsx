import React, { Component } from "react";

class FormRegister extends Component {
  render() {
    return (
      <form action="">
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota"></textarea>
        <button>Criar nota</button>
      </form>
    );
  }
}

export default FormRegister;
