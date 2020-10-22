import React, { Component } from "react";
import {
  Header,
  Hero,
  Panel,
  Chart,
  InfoSection,
  Faq,
  Blog,
  Footer,
} from "./components/index";
import "bootstrap/dist/css/bootstrap.min.css";
import {fetchData, countries} from "./api";
import "./App.css";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({data: fetchedData, country: country})
    
  };

  render() {
    
    const {data, country} = this.state
    return (
      <>
        <Header />
        <Hero />
        <Panel data={data} handleCountryChange={this.handleCountryChange}/>
        <Chart country={country} data={data} />
        <InfoSection />
        <Faq />
        <Blog />
        <Footer />
      </>
    );
  }
}
