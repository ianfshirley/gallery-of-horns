import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      isModalShown: false,
      selectedBeast: {}
    }
  }

  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + '❤️'
    })
  }

  handleCloseModal = () => {
    this.setState({
      isModalShown: false
    })
  }

  handleOpenModal = () => {
    this.setState({
      isModalShown: true
    })
  }

  render() {
    return (
      <div>
        <Header
          hearts={this.state.hearts}
        />
        <p onClick={this.handleOpenModal}>Open Modal</p>
        <Main
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
        />
        <Footer />
        <SelectedBeast
          show={this.state.isModalShown}
          onHide={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
        >
        </SelectedBeast>
      </div>
    );
  }
}

export default App;
