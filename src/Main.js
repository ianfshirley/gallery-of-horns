import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';


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
      />)
    })
    return (
      <main>
        {beastArray}
      </main>
    )
  }
}



export default Main;