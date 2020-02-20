import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../SelfHelp.css';
// import Retrogrades from '../containers/Retrogrades'
// import Horoscope from '../components/Horoscope'
// import Moon from '../components/Moon'
class HelpBooks extends React.Component {


  render() {
    return (
      <div className= 'book-card'>
      <a href={this.props.book['volumeInfo']['infoLink']}><img src = {this.props.book['volumeInfo']['imageLinks']['thumbnail']} /> </a>
      </div>
    );

  }
}

export default HelpBooks;
