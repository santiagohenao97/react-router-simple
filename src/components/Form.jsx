import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        password: "",
        email: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const values = JSON.stringify(this.state.values);
    alert(values);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <Link to="/home">
          <input type="submit" value="submit" className="btn btn-primary" />
        </Link>
      </form>
    );
  }
}
