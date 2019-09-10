import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';
import Retrogrades from '../containers/Retrogrades'
import Horoscope from '../components/Horoscope'
import Moon from '../components/Moon'
import ariimg from '../images/aries.png'


class Aries extends React.Component {
  constructor() {
    super()
    this.state = {
      horoscopes: [],
      retrogrades: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:8888/signs/4')
    .then(resp => resp.json())
    .then(data => this.setState({
      horoscopes: data.horoscopes,
      retrogrades: data.retrogrades
    }))
  }



  render() {
    return (
      <div className= 'horoscope-display'>
        <div className="horoscope-img"><img src = {ariimg}/></div>
        <div className= "heading-card">
          <h1 > HORRORSCOPES </h1>
          <header className="retrograde-header"> LOOKS LIKE THE UNIVERSE IS TO BLAME </header>
        </div>
      <div className="retrogrades"><Retrogrades retrogrades = {this.state.retrogrades}/></div>
      <div className="moon"><Moon /></div>
      <div className="horoscope"><Horoscope horoscopes = {this.state.horoscopes}/></div>
    </div>
    );

  }
}

export default Aries;
