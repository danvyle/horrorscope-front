import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';
import earthimg from '../images/earth.png'
import Mercury from '../components/Mercury'
import Venus from '../components/Venus'
import Mars from '../components/Mars'
import Jupiter from '../components/Jupiter'
import Saturn from '../components/Saturn'
import Pluto from '../components/Pluto'
import Neptune from '../components/Neptune'
import Uranus from '../components/Uranus'



class Retrogrades extends React.Component {
  constructor() {
    super()
    this.state  = {
      isClicked: false,
      planet: null,
    };
  }



  render() {
    return (


      <Router>
        <div className="App">
          <div className="planets-container">
            <h3>PLANETS IN RETROGRADE</h3>

            <div className = 'planet-card'><Mercury retrogrades={this.props.retrogrades} /></div>
            <div className = 'planet-card'><Uranus retrogrades={this.props.retrogrades} /></div>
            <div className = 'planet-card'><Mars retrogrades={this.props.retrogrades} /></div>
            <div className = 'planet-card'><Pluto retrogrades={this.props.retrogrades} /></div>
            <div className = 'planet-card'><Venus retrogrades={this.props.retrogrades} /></div>
            <div className = 'planet-card'><Jupiter retrogrades={this.props.retrogrades} /></div>
            <div className = 'planet-card'><Saturn retrogrades={this.props.retrogrades} /></div>
            <div className = 'planet-card'><Neptune retrogrades={this.props.retrogrades} /></div>


          </div>
        </div>
      </Router>

    );

  }
}

export default Retrogrades;
