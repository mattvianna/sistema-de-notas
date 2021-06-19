import React, { Component } from "react";
import "./FormRegister.css";

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.category = "";
    this.title = "";
    this.note = "";
  }

  _handleChangeCategory(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.category, this.title, this.text);
  }

  render() {
    return (
      <form className="form" onSubmit={this._createNote.bind(this)} action="">
        <input
          className="form__item form__item--category"
          type="text"
          placeholder="Categoria"
          onChange={this._handleChangeCategory.bind(this)}
        />

        <input
          className="form__item form__item--input"
          type="text"
          placeholder="Título"
          onChange={this._handleChangeTitle.bind(this)}
        />

        <textarea
          className="form__item form__item--textarea"
          placeholder="Escreva sua nota"
          onChange={this._handleChangeText.bind(this)}
        ></textarea>
        <button className="form__btn">Criar nota</button>
      </form>
    );
  }
}

export default FormRegister;
