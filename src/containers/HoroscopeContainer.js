import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';

import Capricorn from '../components/Capricorn'
import Aquarius from '../components/Aquarius'
import Pisces from '../components/Pisces'
import Aries from '../components/Aries'
import Taurus from '../components/Taurus'
import Gemini from '../components/Gemini'
import Cancer from '../components/Cancer'
import Leo from '../components/Leo'
import Virgo from '../components/Virgo'
import Libra from '../components/Libra'
import Scorpio from '../components/Scorpio'
import Sagittarius from '../components/Sagittarius'
import capimg from '../images/capricorn.png'

class HoroscopeContainer extends React.Component {





  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Horrorscope</h1>

            <h3>WHY ARE YOU CRAZY?</h3>


            <div id="sign-buttons">

              <Link to="/capricorn"><img name='capricorn' onClick = {() => this.props.handleClickSign('Capricorn')} src={capimg}></img></Link>
              <Link to="/aquarius"><img value='aquarius' onClick = {() => this.props.handleClickSign('Aquarius')} src={capimg}></img></Link>
              <Link to="/pisces"><img value='pisces' onClick = {() => this.props.handleClickSign('Pisces')}src={capimg}></img></Link>
              <Link to="/aries"><img value='aries' onClick = {() => this.props.handleClickSign('Aries')}src={capimg}></img></Link>
              <Link to="/taurus"><img value='taurus' onClick = {() => this.props.handleClickSign('Taurus')}src={capimg}></img></Link>
              <Link to="/gemini"><img value='gemini' onClick = {() => this.props.handleClickSign('Gemini')}src={capimg}></img></Link>
              <Link to="/cancer"><img value='cancer' onClick = {() => this.props.handleClickSign('Cancer')}src={capimg}></img></Link>
              <Link to="/leo"><img value='leo' onClick = {() => this.props.handleClickSign('Leo')}src={capimg}></img></Link>
              <Link to="/virgo"><img value='virgo' onClick = {() => this.props.handleClickSign('Virgo')}src={capimg}></img></Link>
              <Link to="/libra"><img value='libra' onClick = {() => this.props.handleClickSign('Libra')}src={capimg}></img></Link>
              <Link to="/scorpio"><img value='scorpio' onClick = {() => this.props.handleClickSign('Scorpio')}src={capimg}></img></Link>
              <Link to="/sagittarius"><img value='sagittarius' onClick = {() => this.props.handleClickSign('Sagittarius')}src={capimg}></img></Link>

              
            </div>
          </header>
        </div>
      </Router>
        )

    }
  }

  export default HoroscopeContainer;
