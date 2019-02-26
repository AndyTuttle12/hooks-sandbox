import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LoginForm logo="logo.svg" />
        </header>
      </div>
    );
  }
}

export default App;
