import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {    
    return (
      <main>
        <Container>
          <Row>
            {this.props.data.map((beast, idx) => 
              <HornedBeast
                _id={beast.name}
                image_url={beast.image_url}
                title={beast.title}
                description={beast.description}
                keyword={beast.keyword}
                horns={beast.horns}
                key={idx}
                handleOpenModal={this.props.handleOpenModal}
              />)
            }
          </Row>
        </Container>
      </main>
    )
  }
}

export default Main;