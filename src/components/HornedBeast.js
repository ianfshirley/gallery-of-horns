import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


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
          <Card.Img src={this.props.image_url} alt={this.props.title} title={this.props.title} />
          <Card.Body>
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