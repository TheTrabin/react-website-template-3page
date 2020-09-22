import React from 'react';
import Carousel, {slidesToShowPlugin, autoplayPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const MyCarousel = () => (
    <div>
    <center>
    <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'row', alignContent: 'center', textAlign: 'center', width: 800 }}>
  <Carousel  plugins={[
      'infinite',
       'arrows',
      'fastSwipe',
    {
        resolve: slidesToShowPlugin,
        options: {
            numberOfSlides: 1
      }
    },
      {resolve: autoplayPlugin,
        options: {
          interval: 2000,
        },
      }]}
       animationSpeed={1000}>
    <img src={"https://via.placeholder.com/200/150.png"} alt=" " />
    <img src={"https://via.placeholder.com/200/158.png"} alt =" "/>
    <img src={"https://via.placeholder.com/200/777.png"} alt =" "/>
  </Carousel>
  <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
  </center>
  </div>
);

export default MyCarousel;