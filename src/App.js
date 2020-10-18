import React, { Component } from "react";
import { Header, Hero, Panel, Chart, InfoSection } from "./components/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <Panel />
        <Chart />
        <InfoSection/>
      </>
    );
  }
}
