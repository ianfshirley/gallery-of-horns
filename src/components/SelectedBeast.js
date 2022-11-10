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
        <img className='modalImg' src={this.props.image_url} alt={this.props.title}/>
        <p>{this.props.description}</p>
      </Modal.Body>
    </Modal>
    )
  }
}

export default SelectedBeast;