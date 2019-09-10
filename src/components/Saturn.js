import React from 'react';
// import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../App.css';
import satimg from '../images/saturn.png'

class Saturn extends React.Component {
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
    let from = new Date('2019-04-30');
    let to = new Date('2019-09-18');
    let from1 = new Date('2020-05-11');
    let to1 = new Date('2020-09-29');

    if (from < today && today < to) {
      this.setState({isRetrograde: true})
    } else if (from1 < today && today < to1) {
      this.setState({isRetrograde: true})
    }
  }






  render() {
    return (
      <div className="bg">
        <img onClick = {() => this.handleClickPlanet('Saturn')} src={satimg}/>
        <p> {(this.props.retrogrades[4] && this.state.isPlanetClicked) ? this.props.retrogrades[4].explanation : null } </p>
        <p> {(this.state.isRetrograde) ? <div className = 'planet-card-content'> Saturn is in retrograde </div> : null } </p>
      </div>
    );
  }
}

export default Saturn;
