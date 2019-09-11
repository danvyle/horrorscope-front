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
import aquimg from '../images/aquarius.png'
import pisimg from '../images/pisces.png'
import ariimg from '../images/aries.png'
import tauimg from '../images/taurus.png'
import gemimg from '../images/gemini.png'
import canimg from '../images/cancer.png'
import leoimg from '../images/leo.png'
import virimg from '../images/virgo.png'
import libimg from '../images/libra.png'
import scoimg from '../images/scorpio.png'
import sagimg from '../images/sagittarius.png'

class HoroscopeContainer extends React.Component {





  render() {
    return (
      <Router>
        <div><p className='border-text'> WHY AM I BEING SO F*CKING CRAZY?!WHY AM I BEING SO F*CKING CRAZY?!WHY AM I BEING SO F*CKING CRAZY?!WHY AM I BEING SO F*CKING CRAZY?!WHY AM I BEING SO F*CKING CRAZY?!WHY AM I BEING SO F*CKING CRAZY?!WHY AM I BEING SO F*CKING CRAZY?! </p> </div>
        <div className="Horoscope">
          <header className="Horoscope-header">
            <h1 >HORRORSCOPES</h1>

            <h5>Are you feelin’ a little off kilter? Do you wonder if it’s the planets or if it’s you? If so, you’ve come to the right place!</h5>


            <div className="signs-container">
              <div className = 'sign-card'> <Link to="/capricorn"> <img name='capricorn' onClick = {() => this.props.handleClickSign('Capricorn')} src={capimg}></img> </Link>  <div className = 'sign-card-content'>capricorn</div>  </div>
              <div className = 'sign-card'> <Link to="/aquarius"><img value='aquarius' onClick = {() => this.props.handleClickSign('Aquarius')} src={aquimg}></img> </Link> <div className = 'sign-card-content'> aquarius</div> </div>
              <div className = 'sign-card'> <Link to="/pisces"><img value='pisces' onClick = {() => this.props.handleClickSign('Pisces')}src={pisimg}></img> </Link> <div className = 'sign-card-content'> pisces</div> </div>
              <div className = 'sign-card'> <Link to="/aries"><img value='aries' onClick = {() => this.props.handleClickSign('Aries')}src={ariimg}></img> </Link> <div className = 'sign-card-content'> aries</div> </div>
              <div className = 'sign-card'> <Link to="/taurus"><img value='taurus' onClick = {() => this.props.handleClickSign('Taurus')}src={tauimg}></img> </Link> <div className = 'sign-card-content'> taurus</div> </div>
              <div className = 'sign-card'> <Link to="/gemini"><img value='gemini' onClick = {() => this.props.handleClickSign('Gemini')}src={gemimg}></img> </Link> <div className = 'sign-card-content'> gemini</div> </div>
            </div>

            <div className='signs-container2'>
              <div className = 'sign-card2'> <Link to="/cancer"><img value='cancer' onClick = {() => this.props.handleClickSign('Cancer')}src={canimg}></img></Link>   <div className = 'sign-card-content'> cancer</div> </div>
              <div className = 'sign-card2'> <Link to="/leo"><img value='leo' onClick = {() => this.props.handleClickSign('Leo')}src={leoimg}></img> </Link>  <div className = 'sign-card-content'>leo </div> </div>
              <div className = 'sign-card2'> <Link to="/virgo"><img value='virgo' onClick = {() => this.props.handleClickSign('Virgo')}src={virimg}></img> </Link>  <div className = 'sign-card-content'>virgo </div> </div>
              <div className = 'sign-card2'> <Link to="/libra"><img value='libra' onClick = {() => this.props.handleClickSign('Libra')}src={libimg}></img></Link>   <div className = 'sign-card-content'>libra </div> </div>
              <div className = 'sign-card2'> <Link to="/scorpio"><img value='scorpio' onClick = {() => this.props.handleClickSign('Scorpio')}src={scoimg}></img> </Link>  <div className = 'sign-card-content'>scorpio </div></div>
              <div className = 'sign-card2'> <Link to="/sagittarius"><img value='sagittarius' onClick = {() => this.props.handleClickSign('Sagittarius')}src={sagimg}></img> </Link>   <div className = 'sign-card-content'>sagittarius </div> </div>
            </div>


          </header>
        </div>
      </Router>
    )

  }
}

export default HoroscopeContainer;
