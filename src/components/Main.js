import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
  render() {

    let beastArray = [];
    data.forEach((beast, idx) => {
      beastArray.push(<HornedBeast
        _id={beast.name}
        image_url={beast.image_url}
        title={beast.title}
        description={beast.description}
        keyword={beast.keyword}
        horns={beast.horns}
        key={idx}
        addHearts={this.props.addHearts}
        handleOpenModal={this.props.handleOpenModal}
      />)
    })
    return (
      <main>
        <Container>
          <Row>
            {beastArray}
          </Row>
        </Container>
      </main>
    )
  }
}



export default Main;