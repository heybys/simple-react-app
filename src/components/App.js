import React, { Component } from "react";
import Router from "components/Router";
import Header from "components/Header";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}
