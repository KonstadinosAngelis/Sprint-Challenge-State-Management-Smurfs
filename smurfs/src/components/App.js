import React, { Component } from "react";

import { SmurfContext } from '../contexts/smurfContext'
import SmurfVillage from './SmurfVillage'
import Header from './Header'
import AddSmurfForm from './AddSmurfForm'

import axios from 'axios'

import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="app">
        <div className="head">
          <Header />
        </div>
        <SmurfContext.Provider value={this.state.smurfs}>
          <AddSmurfForm />
          <SmurfVillage />
        </SmurfContext.Provider>
      </div>
    );
  }
}

export default App;
