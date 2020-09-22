import React, { Component } from "react";
import Form from "../components/Form";

import "./styles/loginStyles.css";

export default class Login extends Component {
  render() {
    return (
      <div className="container login-container">
        <div
          className="row login-container d-flex 
        justify-content-center align-items-center"
        >
          <div className="border p-3">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
