import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;