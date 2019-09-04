import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';
import moon from '../images/moon.png'
import moonsliver from '../images/moonsliver.png'


class Moon extends React.Component {
constructor(){
  super()
  this.state = {
    isFullMoon: ''
  }
  this.status = {
    no:false,
    yes: true
  }
}


componentDidMount() {
  fetch('http://localhost:8888/fetch_moon')
  .then(resp => resp.json())
  .then(data => this.setState({isFullMoon: data.status}))
}



  render() {
    return (
      <div className="moon">
          <h2> IS THE MOON FULL? </h2>

          <h3> {(this.status[this.state.isFullMoon]) ? <img src={moon}/>  :  <img src={moonsliver}/>} </h3>

            </div>
        );

    }
  }

  export default Moon;

  // ? <img src={moon} /> : <img src={moon} />  }
