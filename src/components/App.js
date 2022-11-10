import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import SelectedBeast from './SelectedBeast';
import data from '../data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
      
      selectedTitle: '',
      selectedImageUrl: '',
      selectedDescription: ''
    }
  }

  handleCloseModal = () => {
    this.setState({
      isModalShown: false
    })
  }

  handleOpenModal = (title, URL, desc) => {
    this.setState({
      isModalShown: true,
      selectedTitle: title,
      selectedImageUrl: URL,
      selectedDescription: desc,
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.isModalShown}</p>
        <Header />
        <Main
          data={data}
          handleOpenModal={this.handleOpenModal}
        />
        <Footer />
        <SelectedBeast
          isModalShown={this.state.isModalShown}
          onHide={this.handleCloseModal}
          // selectedBeast={this.state.selectedBeast}
          title={this.state.selectedTitle}
          imageUrl={this.state.selectedImageUrl}
          description={this.state.selectedDescription}
        >
        </SelectedBeast>
      </div>
    );
  }
}

export default App;
