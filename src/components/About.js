import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={this.props.active ? "page page--open" : "page page--close"}
        onClick={this.props.active ? this.props.onClick : null}
      >
        <div className="page-internal">
          <h1>About</h1>
          <p>Hello from the about page!</p>
          <Link to="/" className="link link--faded">
            Click here to go to Home
          </Link>
        </div>
      </div>
    );
  }
}
