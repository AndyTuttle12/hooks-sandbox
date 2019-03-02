import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LoginForm
            logo="reactLogo.svg"
            registration="#"
            registerMessage="Don't have a login? "
          />
        </header>
      </div>
    );
  }
}

export default App;
