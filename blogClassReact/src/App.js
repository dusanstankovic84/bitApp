import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import {Blog} from "./components/blog";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: []
    }
  }

  render() {
    return (
      <>
        <Header title="Users" />
        <Blog />
      </>
    )
  }
}

export default App;
