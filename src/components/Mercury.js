import React from 'react';
// import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../App.css';
import earthimg from '../images/earth.png'

class Mercury extends React.Component {
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
    let today = new Date();
    let from = new Date('2019-03-05');
    let to = new Date('2019-03-28');
    let from1 = new Date('2019-07-07');
    let to1 = new Date('2019-08-02');
    let from2 = new Date('2019-10-31');
    let to2 = new Date('2019-11-20');
    let from3 = new Date('2020-02-17');
    let to3 = new Date('2020-03-10');
    let from4 = new Date('2020-06-18');
    let to4 = new Date('2020-07-12');
    let from5 = new Date('2020-10-14');
    let to5 = new Date('2020-11-03');

    if (from < today && today < to) {
      this.setState({isRetrograde: true})
    } else if (from1 < today && today < to1) {
      this.setState({isRetrograde: true})
    } else if (from2 < today && today < to2) {
      this.setState({isRetrograde: true})
    } else if (from3 < today && today < to3) {
      this.setState({isRetrograde: true})
    } else if (from4 < today && today < to4) {
      this.setState({isRetrograde: true})
    } else if (from5 < today && today < to5) {
      this.setState({isRetrograde: true})
    }
  }






render() {
  return (
    <div className="bg">
    <img onClick = {() => this.handleClickPlanet('Mercury')} src={earthimg}/>
    <p> {(this.props.retrogrades[0] && this.state.isPlanetClicked) ? this.props.retrogrades[0].explanation : null } </p>
    <p> {(this.state.isRetrograde) ? 'it my fault' : 'not my fault' } </p>
    </div>
  );
}
}

export default Mercury;

//   var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
//
// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);

// <p> {(this.state.isRetrograde)} <p>
