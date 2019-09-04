import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';
import Retrogrades from '../containers/Retrogrades'
import Horoscope from '../components/Horoscope'
import Moon from '../components/Moon'


class Cancer extends React.Component {
  constructor() {
    super()
    this.state = {
      horoscopes: [],
      retrogrades: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:8888/signs/7')
    .then(resp => resp.json())
    .then(data => this.setState({
      horoscopes: data.horoscopes,
      retrogrades: data.retrogrades
    }))
  }



  render() {
    return (
      <div className="bg">
        <h2> Hello! You Cancer, you! </h2>
        <Retrogrades retrogrades = {this.state.retrogrades}/>
        <Moon />
        <Horoscope horoscopes = {this.state.horoscopes}/>
      </div>
    );

  }
}

export default Cancer;
