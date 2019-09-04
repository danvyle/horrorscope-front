import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';


class Moon extends React.Component {
constructor(){
  super()
  this.state = {
    isFullMoon: ''
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
          <h3> {this.state.isFullMoon}</h3>

            </div>
        );

    }
  }

  export default Moon;
