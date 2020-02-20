import React from 'react';
// import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../App.css';
import jupimg from '../images/jupiter.png'

class Jupiter extends React.Component {
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
    let from = new Date('2019-04-10');
    let to = new Date('2019-08-11');
    let from1 = new Date('2020-05-14');
    let to1 = new Date('2020-09-13');

    if (from < today && today < to) {
      this.setState({isRetrograde: true})
    } else if (from1 < today && today < to1) {
      this.setState({isRetrograde: true})
    }
  }

  setDisplay = () => {
    this.setState({isPlanetClicked: !this.state.isPlanetClicked})
  }




  render() {
    return (
      <div className="bg">
        <img onClick = {() => this.handleClickPlanet('Jupiter')} src={jupimg}/>
        <p> {(this.state.isRetrograde) ? <div className = 'planet-card-content'>Jupiter is in retrograde</div> : null } </p>
        <p> {(this.props.retrogrades[3] && this.state.isPlanetClicked && this.state.isRetrograde) ? <div className = 'background-modal'> <div className = "modal"> {this.props.retrogrades[3].explanation} <span className="close-button"> <button onClick={this.setDisplay}  className="closed">X</button> </span> </div> </div> : null } </p>
      </div>
    );
  }
}

export default Jupiter;
