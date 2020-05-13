import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ItemForm } from "./view/forms/Form";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Boilerplate React App</p>
      </header>
      <ItemForm className="Item-form"></ItemForm>
    </div>
  );
}
