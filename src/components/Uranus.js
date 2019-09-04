import React from 'react';
// import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../App.css';
import uraimg from '../images/uranus.png'

class Uranus extends React.Component {
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
    let from = new Date('2019-08-12');
    let to = new Date('2020-01-01');
    let from1 = new Date('2020-08-15');
    let to1 = new Date('2021-01-01');

    if (from < today && today < to) {
      this.setState({isRetrograde: true})
    } else if (from1 < today && today < to1) {
      this.setState({isRetrograde: true})
    }
  }






render() {
  return (
    <div className="bg">
    <img onClick = {() => this.handleClickPlanet('Uranus')} src={uraimg}/>
    <p> {(this.props.retrogrades[7] && this.state.isPlanetClicked) ? this.props.retrogrades[7].explanation : null } </p>
    <p> {(this.state.isRetrograde) ? 'it do be like dat' : 'not my fault' } </p>
    </div>
  );
}
}

export default Uranus;
