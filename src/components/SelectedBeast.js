import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return(
    <Modal 
      show={this.props.show}
      onHide={this.props.onHide}
    >

    </Modal>
    )
  }
}

export default SelectedBeast;