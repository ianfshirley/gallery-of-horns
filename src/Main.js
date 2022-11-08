import React from 'react';
import HornedBeast from './HornedBeast';
// import trolloc from './trolloc.jpeg';


class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast 
          title='Trolloc'
          src='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
          src="https://i.ibb.co/YTR1M4V/trolloc.jpg"
          // src={trolloc}
          alt='Trolloc'
          imgTitle='Trolloc'
          description='Shadowspawn, a horrifying cross of human and animal. Predators who delight in killing. Avoid at all costs.'
        />
        <HornedBeast
          title='Unicorn'
          src="https://i.ibb.co/ssw3VNt/unicorn.jpg"
          alt="Unicorn"
          imgTitle='Unicorn'
          description='Majestic creature with magical abilities. Extremely rare.'
        />
      </main>
    )
  }
}



export default Main;