import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import data from '../data.json';
// import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

// console.log(data[0]);

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredData: this.props.data || []
    }
  }

  handleSelect = (event) => {
    let hornData = '';
    console.log(event.target.value)
    if (event.target.value === 'one') {
      hornData = this.props.data.filter(beastHorns => beastHorns.horns === 1)
    } else if (event.target.value === 'two') {
      hornData = this.props.data.filter(beastHorns => beastHorns.horns === 2)
    } else if (event.target.value === 'three') {
      hornData = this.props.data.filter(beastHorns => beastHorns.horns === 3)
    } else if (event.target.value === 'hundred') {
      hornData = this.props.data.filter(beastHorns => beastHorns.horns === 100)
    } else {
      hornData = this.props.data;
    }
    this.setState({filteredData: hornData});
  }

  render() {    
    return (
      <main>
        <Form>
          <Form.Group>
            <Form.Label>
              Filter Beasts by Number of Horns
            </Form.Label>
            <Form.Select onChange={this.handleSelect}>
              <option>All</option>
              <option value='one'>1</option>
              <option value='two'>2</option>
              <option value='three'>3</option>
              <option value='hundred'>100</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Container>
          <Row>
            {this.state.filteredData.map((beast, idx) => 
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