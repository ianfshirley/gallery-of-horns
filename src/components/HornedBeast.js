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

  // handleTitleClick = () => {
  //   this.props.handleOpenModal(this.props.name);
  // }

  render() {
    return (
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img 
            src={this.props.image_url}
            alt={this.props.title}
            title={this.props.title}
            onClick={this.props.addHearts} 
          />
          <Card.Body
            onClick={this.props.handleOpenModal}
          >
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              <p>
                <button onClick={this.handleClick}>
                  ❤️
                </button>
                Favorited: {this.state.favorites}
              </p>
              <p>{this.props.description}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}



export default HornedBeast;