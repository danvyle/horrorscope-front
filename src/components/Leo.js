import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';
import Retrogrades from '../containers/Retrogrades'
import Horoscope from '../components/Horoscope'
import Moon from '../components/Moon'
import leoimg from '../images/leo.png'


class Leo extends React.Component {
  constructor() {
    super()
    this.state = {
      horoscopes: [],
      retrogrades: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:8888/signs/8')
    .then(resp => resp.json())
    .then(data => this.setState({
      horoscopes: data.horoscopes,
      retrogrades: data.retrogrades
    }))
  }



  render() {
    return (
      <div className= 'horoscope-display'>
        <div className="horoscope-img"><img src = {leoimg}/></div>
        <div className= "heading-card">
          <h1 > HORRORSCOPES </h1>
          <h2> LOOKS LIKE THE UNIVERSE IS TO BLAME </h2>        </div>
          <div className="retrogrades"><Retrogrades retrogrades = {this.state.retrogrades}/></div>
          <div className="moon"><Moon /></div>
          <div className="horoscope"><Horoscope horoscopes = {this.state.horoscopes}/></div>
        </div>
      );

    }
  }

  export default Leo;
