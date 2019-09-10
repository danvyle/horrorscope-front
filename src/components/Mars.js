import React from 'react';
// import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../App.css';
import marimg from '../images/mars.png'

class Mars extends React.Component {
  constructor() {
    super()
    this.state = {
      isPlanetClicked: false,
      isRetrograde: false
    }
  }

  handleClickPlanet = (name) => {
    this.setState({
      isPlanetClicked: !this.state.isPlanetClicked,
    })
  }

  componentDidMount() {
    let today = new Date();
    let from = new Date('2020-09-09');
    let to = new Date('2020-11-14');
    if (from < today && today < to) {
      this.setState({isRetrograde: true})
    }
  }






render() {
  return (
    <div className="bg">
    <img onClick = {() => this.handleClickPlanet('Mars')} src={marimg}/>
    <p> {(this.props.retrogrades[1] && this.state.isPlanetClicked) ? this.props.retrogrades[1].explanation : null } </p>
    <p> {(this.state.isRetrograde) ? <div className = 'planet-card-content'> Mars is in retrograde </div> : null } </p>
    </div>
  );
}
}

export default Mars;
