import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

class App extends Component {
  login = formData => {
    const prom = new Promise((resolve, reject) => {
      return setTimeout(() => {
        const success = Math.ceil(Math.random() * 10);
        if (success > 5) {
          resolve({
            code: 200,
            message: `${formData.userValue} successfully logged in.`
          });
        } else {
          reject({ code: 500, message: "Something went wrong. Try again." });
        }
      }, 500);
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
            validation={{
              userValue: "([0-9]+|andy|test)",
              passValue: "([0-9]+|andy|test)"
            }}
            submitForm={(formData, callback) => {
              this.login(formData)
                .then(result => callback(result))
                .catch(e => {
                  console.error(e);
                  return callback(e);
                });
            }}
          />
        </header>
      </div>
    );
  }
}

export default App;
