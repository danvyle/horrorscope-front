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
      <h3> Planets in Retrograde </h3>
      </div>


      <div id="planets">

      <Mercury retrogrades={this.props.retrogrades} />
      <Mars retrogrades={this.props.retrogrades} />
      <Venus retrogrades={this.props.retrogrades} />
      <Jupiter retrogrades={this.props.retrogrades} />
      <Saturn retrogrades={this.props.retrogrades} />
      <Pluto retrogrades={this.props.retrogrades} />
      <Neptune retrogrades={this.props.retrogrades} />
      <Uranus retrogrades={this.props.retrogrades} />


      </div>
      </header>
      </div>
      </Router>

    );

  }
}

export default Retrogrades;
