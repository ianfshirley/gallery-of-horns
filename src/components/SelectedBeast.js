import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return(
    <Modal 
      show={this.props.isModalShown}
      onHide={this.props.onHide}
      className='modal'
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {this.props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='picDiv'>
          <img
            className='selectedImage'
            src={this.props.imageUrl}
            alt={this.props.title}
          />
        </div>
        <p className='selectedDescription'>{this.props.description}</p>
      </Modal.Body>
    </Modal>
    )
  }
}

export default SelectedBeast;