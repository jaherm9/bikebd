import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import slider1 from "../../Image/slider1.jpg"
import slider2 from "../../Image/slider2.jpg"
import slider3 from "../../Image/slider3.jpg"
import Products from '../Products/Products';
const Home = () => {
    return (
        <div>
            <Container className="">  
          <Carousel>
        <Carousel.Item interval={1000}>
                  <img className="d-block w-100" style={{height:"600px"}} src={ slider1} alt="First slide" />
          <Carousel.Caption>
            <h3>Make Best Choose</h3>
            <p>BE A PART OF THE MOVERS GENERATION! BROUTH TO YOU BY BIKE VALLEY</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
              <img className="d-block w-100" style={{height:"600px"}} src={ slider2}alt="Second slide" />
          <Carousel.Caption>
            <h3>Make Best Choose</h3>
            <p>BE A PART OF THE MOVERS GENERATION! BROUTH TO YOU BY BIKE VALLEY</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" style={{height:"600px"}} src={ slider3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Make Best Choose</h3>
            <p>BE A PART OF THE MOVERS GENERATION! BROUTH TO YOU BY BIKE VALLEY</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
      <Products></Products>
        </div>
    );
};

export default Home;