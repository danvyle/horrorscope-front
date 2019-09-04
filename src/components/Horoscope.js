import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';


class Horoscope extends React.Component {
constructor() {
  super()
  this.state = {
    dailyHoroscope: null
  }
}




  render() {

    return (
      <div className="horoscope">
      <h1> Your Daily Horoscope </h1>
        <h2>{(this.props.horoscopes[4]) ? this.props.horoscopes[4].daily_horoscope : null }
</h2>
            </div>
        );

    }
  }

  export default Horoscope;
