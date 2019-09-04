import React from 'react';
// import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../App.css';
import venimg from '../images/venus.png'

class Venus extends React.Component {
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
    let from = new Date('2020-05-13');
    let to = new Date('2020-06-25');
    if (from < today && today < to) {
      this.setState({isRetrograde: true})
    }
  }

render() {
  return (
    <div className="bg">
    <img onClick = {() => this.handleClickPlanet('Venus')} src={venimg}/>
    <p> {(this.props.retrogrades[2] && this.state.isPlanetClicked) ? this.props.retrogrades[2].explanation : null } </p>
    <p> {(this.state.isRetrograde) ? 'it do be like dat' : 'not my fault' } </p>
    </div>
  );
}
}

export default Venus;
