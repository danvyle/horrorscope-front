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
      isRetrograde: false,
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

// componentDidMount() {
//   let today = new Date();
//   let from = new Date('2019-03-05');
//   let to = new Date('2020-01-01');
//   let from1 = new Date('2020-04-25');
//   let to1 = new Date('2021-01-01');
//
//   if (from < today && today < to) {
//     this.setState({isRetrograde: true})
//   } else if (from1 < today && today < to1) {
//     this.setState({isRetrograde: true})
//   }
// }
//
// whatMoonPhase = () => {
//   let today = new Date(),
//   month = today.getMonth() + 1,
//   day = today.getDate(),
//   year = today.getFullYear();
//   function Simple(year,month,day) {
//     var lp = 2551443;
//     var now = new Date(year, month-1, day, 20, 35, 0);
//     var new_moon = new Date(1970, 0, 7, 20, 35, 0);
//     console.log('*new-moon*', new_moon)
//     var phase = ((now.getTime() - new_moon.getTime())/1000) % lp;
//     return Math.floor(phase /(24*3600)) + 1;
//   }
//   return Simple(year,month,day)
// }


render() {
  if (this.state.isClicked) {
    return(
      <div className ="App">
        <header className="App-header">
          {this.comps[this.state.sign] && this.comps[this.state.sign]}
        </header>
      </div>
    )
  } else {
    return(
      <div className = "App">
        <header className="App-header"> <HoroscopeContainer handleClickSign = {this.handleClickSign} />
      </header>
    </div>
  )
}
}
}



export default App;
