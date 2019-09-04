import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';
import Retrogrades from '../containers/Retrogrades'
import Horoscope from '../components/Horoscope'
import Moon from '../components/Moon'


class Capricorn extends React.Component {
  constructor() {
    super()
    this.state = {
      horoscopes: [],
      retrogrades: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:8888/signs/1')
    .then(resp => resp.json())
    .then(data => this.setState({
      horoscopes: data.horoscopes,
      retrogrades: data.retrogrades
    }))
  }



  render() {
    return (
      <div className="bg">
        <h2> Hello! You Capricorn, you! </h2>
        <Retrogrades retrogrades = {this.state.retrogrades}/>
        <Moon />
        <Horoscope horoscopes = {this.state.horoscopes}/>
      </div>
    );

  }
}

export default Capricorn;

//   var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
//
// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);
