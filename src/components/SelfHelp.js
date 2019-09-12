import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../SelfHelp.css';
import HelpBooks from '../components/HelpBooks'
// import Retrogrades from '../containers/Retrogrades'
// import Horoscope from '../components/Horoscope'
// import Moon from '../components/Moon'
// import capimg from '../images/capricorn.png'

class SelfHelp extends React.Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }


  componentDidMount() {
    fetch('http://localhost:8888/fetch_books')
    .then(resp => resp.json())
    .then(data => this.handleBooks(data['items']))
  }

  handleBooks = (data) => {
    this.setState({books: data})
  }

  handleClickHome = () => {
    window.open('http://localhost:3000', "_parent")
  }

  render() {
    console.log(this.state.books)
    return (
      <div className = "App">
        <header className="App-header">
          <div className= 'self-help-display'>
            {(this.props.image) ? <div onClick = {this.handleClickHome} className = 'self-help-image'> <h3 className='item'>HOME</h3> <img src = {this.props.image}></img> </div>: 'no image '}
            <h2 className = 'books-h2'>LOOKS LIKE YOU ARE JUST CRAZY</h2>
            <div className = 'books'>
              <h1 className = 'books-h1'>TRY A SELF HELP BOOK</h1>
              <div className="books-container">
                {
                  this.state.books.map((book, key) => {
                    return <HelpBooks book={book} key={book.id}
                      />
                  })
                }

              </div>
            </div>
          </div>
        </header>
      </div>
    );

  }
}

export default SelfHelp;
