import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';


class Horoscope extends React.Component {


  render() {

    return (
      <div className="horoscope-section">
        <h3> DAILY HOROSCOPE </h3>
        <div className='horoscope-text'>
          {(this.props.horoscopes[0]) ? <h4> {this.props.horoscopes[this.props.horoscopes.length-1].daily_horoscope} </h4> : null }

        </div>

      </div>
    );

  }
}

export default Horoscope;
