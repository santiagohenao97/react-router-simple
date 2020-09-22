import React, { Component } from "react";
import Card from "../components/Card";

import data from "../../data/data.json";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <Card data={this.state.data} />
          </div>
        </div>
      </>
    );
  }
}
