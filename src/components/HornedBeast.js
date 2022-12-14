import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    };
  }

  handleClick = () => {
    this.setState({
      favorites: this.state.favorites + 1
    });
  }

  render() {
    return (
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            onClick={() => this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description)}
            src={this.props.image_url}
            alt={this.props.title}
            title={this.props.title}
          />
          <Card.Body className='cardBody'>
            <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
              <p>
                <button onClick={() => this.handleClick()}>
                  ❤️
                </button>
                Favorited: {this.state.favorites}
              </p>
              <p>{this.props.description}</p>
              <p>Number of horns: {this.props.horns}</p>
              </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}



export default HornedBeast;