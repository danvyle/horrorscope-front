import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';
import moon from '../images/moon.png'
import firstmoon from '../images/firstquartermoon.png'
import newmoon from '../images/newmoon.png'
import thirdmoon from '../images/thirdquartermoon.png'


class Moon extends React.Component {
  constructor(){
    super()
    this.state = {
      moonImg: moon
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
    return Simple(year,month,day)
  }




  // full moon = 15
  // new moon = 0
  // quarter moon = 7
  // 3rd quarter = 23


  render() {
      
    if (this.whatMoonPhase() >= 15 && this.whatMoonPhase() <= 18) {
      return (<div className = 'moon-container'> <h3> MOON PHASE </h3> <img src={moon}/> <p> It's a full moon! </p> </div>)
    } else if (this.whatMoonPhase() >= 0 && this.whatMoonPhase() <= 7) {
      return (<div className = 'moon-container'> <h3> MOON PHASE </h3> <img src={newmoon}/> <p> It's a new moon </p> </div>)
    } else if (this.whatMoonPhase() > 7 && this.whatMoonPhase() < 15) {
      return (<div className = 'moon-container'> <h3> MOON PHASE </h3> <img src={firstmoon}/> <p> Not quite a full moon </p> </div>)
    } else if (this.whatMoonPhase() >= 18 ) {
      return (<div className = 'moon-container'> <h3> MOON PHASE </h3> <img src={thirdmoon}/> <p> Not quite a full  moon </p> </div>)
    }
  }

}



export default Moon;
