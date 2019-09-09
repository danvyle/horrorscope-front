import React from 'react';
// import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../App.css';
import nepimg from '../images/neptune.png'

class Neptune extends React.Component {
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
    let from = new Date('2019-06-21');
    let to = new Date('2019-11-27');
    let from1 = new Date('2020-06-23');
    let to1 = new Date('2020-11-29');

    if (from < today && today < to) {
      this.setState({isRetrograde: true})
    } else if (from1 < today && today < to1) {
      this.setState({isRetrograde: true})
    }
  }






  render() {
    return (
      <div className="bg">
        <img onClick = {() => this.handleClickPlanet('Neptune')} src={nepimg}/>
        <p> {(this.state.isRetrograde) ? 'Neptune is in retrograde' : null } </p>
        <p> {(this.props.retrogrades[6] && this.state.isPlanetClicked) ? this.props.retrogrades[6].explanation : null } </p>
      </div>
    );
  }
}

export default Neptune;
