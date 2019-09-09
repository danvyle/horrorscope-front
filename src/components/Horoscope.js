import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';


class Horoscope extends React.Component {


  render() {

    return (
      <div className="horoscope">
        <h3> DAILY HOROSCOPE </h3>
        <div className='horoscope-nav'>
          <p>{(this.props.horoscopes[0]) ? this.props.horoscopes[this.props.horoscopes.length-1].daily_horoscope : null } </p>

        </div>

      </div>
    );

  }
}

export default Horoscope;
