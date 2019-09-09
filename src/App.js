import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import HoroscopeContainer from './containers/HoroscopeContainer'
import Capricorn from './components/Capricorn'
import Aquarius from './components/Aquarius'
import Pisces from './components/Pisces'
import Aries from './components/Aries'
import Taurus from './components/Taurus'
import Gemini from './components/Gemini'
import Cancer from './components/Cancer'
import Leo from './components/Leo'
import Virgo from './components/Virgo'
import Libra from './components/Libra'
import Scorpio from './components/Scorpio'
import Sagittarius from './components/Sagittarius'


class App extends React.Component {
  constructor() {
    super()
    this.state  = {
      isClicked: false,
      sign: null,
    };
    this.comps = {
      Capricorn: <Capricorn />,
    Aquarius: <Aquarius />,
  Pisces: <Pisces />,
Aries: <Aries />,
Taurus: <Taurus />,
Gemini: <Gemini />,
Cancer: <Cancer />,
Leo: <Leo />,
Virgo: <Virgo />,
Libra: <Libra />,
Scorpio: <Scorpio />,
Sagittarius: <Sagittarius />
};
}




handleClickSign = (name) => {
  this.setState({
    isClicked: !this.state.isClicked,
    sign: name
  })
}



render() {
  if (this.state.isClicked) {

    return(
    <div className="App">
      <header className="App-header">
        {this.comps[this.state.sign] && this.comps[this.state.sign]}
      </header>
    </div>)
  } else {

    return(
    <div className="App">
      <header className="App-header"> <HoroscopeContainer handleClickSign = {this.handleClickSign} />
    </header>
  </div>)
}
}
}


export default App;
