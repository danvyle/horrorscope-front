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
    this.comps = {
      Mercury: <Mercury />,
      Venus: <Venus />,
      Mars: <Mars />,
      Jupiter: <Jupiter />,
      Saturn: <Saturn />,
      Pluto: <Pluto />,
      Neptune: <Neptune />,
      Uranus: <Uranus />,
  };
  }

  handleClickPlanet = (name) => {
    this.setState({
      isClicked: !this.state.isClicked,
      planet: name
    })
  }

  render() {
    return (


      <Router>
      <div className="App">
      <header className="App-header">
      <div className="retrogrades">
      <h3> Dis Da Retrogrades </h3>
      {this.comps[this.state.planet] && this.comps[this.state.planet]}
      </div>


      <div id="planet-buttons">

      <Link to="/mercury"><img value='mercury' retrogrades = {this.props.retrogrades} onClick = {() => this.handleClickPlanet('Mercury')}  src={earthimg}></img></Link>
      <Link to="/venus"><img value='venus'  onClick = {() => this.handleClickPlanet('Venus')} src={earthimg}></img></Link>
      <Link to="/mars"><img value='mars' onClick = {() => this.handleClickPlanet('Mars')} src={earthimg}></img></Link>
      <Link to="/jupiter"><img value='jupiter' onClick = {() => this.handleClickPlanet('Jupiter')} src={earthimg}></img></Link>
      <Link to="/saturn"><img value='saturn' onClick = {() => this.handleClickPlanet('Saturn')} src={earthimg}></img></Link>
      <Link to="/pluto"><img value='pluto' onClick = {() => this.handleClickPlanet('Pluto')} src={earthimg}></img></Link>
      <Link to="/neptune"><img value='neptune' onClick = {() => this.handleClickPlanet('Neptune')} src={earthimg}></img></Link>
      <Link to="/uranus"><img value='uranus' onClick = {() => this.handleClickPlanet('Uranus')} src={earthimg}></img></Link>


      </div>
      </header>
      </div>
      </Router>

    );

  }
}

export default Retrogrades;
