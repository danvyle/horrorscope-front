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
      <header className="App-header">
      <div className="retrogrades">
      <h3> Dis Da Retrogrades </h3>
      </div>


      <div id="planets">

      <Mercury retrogrades={this.props.retrogrades} onClick = {() => this.handleClickPlanet('Mercury')} />


      </div>
      </header>
      </div>
      </Router>

    );

  }
}

export default Retrogrades;
