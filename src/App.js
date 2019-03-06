import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

class App extends Component {
  login = formData => {
    console.log(`logging in with ${formData.userValue}`);
    const prom = new Promise(resolve => {
      return setTimeout(
        () => resolve({ code: 200, message: "Successfully logged in." }),
        500
      );
    });
    return prom.then();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LoginForm
            logo="reactLogo.svg"
            registration={1}
            registerMessage="Don't have a login? "
            submitForm={(formData, callback) => {
              this.login(formData)
                .then(result => callback(result))
                .catch(e => console.error(e));
            }}
          />
        </header>
      </div>
    );
  }
}

export default App;
