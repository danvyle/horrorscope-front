import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';
import Retrogrades from '../containers/Retrogrades'
import Horoscope from '../components/Horoscope'
import Moon from '../components/Moon'
import SelfHelp from '../components/SelfHelp'
import canimg from '../images/cancer.png'


class Cancer extends React.Component {
  constructor() {
    super()
    this.state = {
      horoscopes: [],
      retrogrades: [],
      image: canimg
    }
  }
  componentDidMount() {
    fetch('https://horrorscope-backend.herokuapp.com/signs/7')
    .then(resp => resp.json())
    .then(data => this.setState({
      horoscopes: data.horoscopes,
      retrogrades: data.retrogrades
    }))
  }

  retrogradeCheck = () => {
    let today = new Date();
    let from = new Date('2019-03-05');
    let to = new Date('2020-01-01');
    let from1 = new Date('2020-04-25');
    let to1 = new Date('2021-01-01');

    if (from < today && today < to) {
      return true
    } else if (from1 < today && today < to1) {
      return true
    } else {
      return false
    }
  }

  whatMoonPhase = () => {
    let today = new Date(),
    month = today.getMonth() + 1,
    day = today.getDate(),
    year = today.getFullYear();
    function Simple(year,month,day) {
      var lp = 2551443;
      var now = new Date(year, month-1, day, 20, 35, 0);
      var new_moon = new Date(1970, 0, 7, 20, 35, 0);
      console.log('*new-moon*', new_moon)
      var phase = ((now.getTime() - new_moon.getTime())/1000) % lp;
      return Math.floor(phase /(24*3600)) + 1;
    }
    if (Simple(year,month,day) <= 15 && Simple(year,month,day) >= 18) {
      return true
    } else {
      return false
    }
  }

  handleClickHome = () => {
    window.open('http://localhost:3000', "_parent")
  }



  render() {
    if (!this.retrogradeCheck() && !this.whatMoonPhase()) {
      return(
        <div>
          <SelfHelp image = {this.state.image}/>
        </div>
      )
    } else {
      return (
        <div className ="App">
          <header className="App-header">
            <div className= 'horoscope-display'>
              <div onClick = {this.handleClickHome} className="horoscope-img"> <h3>HOME</h3> <img src = {canimg}/></div>
              <div className= "heading-card">
                <h1 > HORRORSCOPES </h1>
                <h2> LOOKS LIKE THE UNIVERSE IS TO BLAME </h2>
              </div>
              <div className="retrogrades"><Retrogrades retrogrades = {this.state.retrogrades}/></div>
              <div className="moon"><Moon /></div>
              <div className="horoscope"><Horoscope horoscopes = {this.state.horoscopes}/></div>
            </div>
          </header>
        </div>
      );
    }
  }
}

export default Cancer;
