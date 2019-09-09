import React from 'react';
// import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../App.css';
import pluimg from '../images/pluto.png'

class Pluto extends React.Component {
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
    let from = new Date('2019-04-24');
    let to = new Date('2019-10-03');
    let from1 = new Date('2020-04-25');
    let to1 = new Date('2020-10-04');

    if (from < today && today < to) {
      this.setState({isRetrograde: true})
    } else if (from1 < today && today < to1) {
      this.setState({isRetrograde: true})
    }
  }






render() {
  return (
    <div className="bg">
    <img onClick = {() => this.handleClickPlanet('Pluto')} src={pluimg}/>
    <p> {(this.props.retrogrades[5] && this.state.isPlanetClicked) ? this.props.retrogrades[5].explanation : null } </p>
    <p> {(this.state.isRetrograde) ? 'Pluto is in retrograde' : null } </p>
    </div>
  );
}
}

export default Pluto;
