import React from 'react'
import Link from 'gatsby-link'
import Slider from "react-slick";

class Carousel extends React.PureComponent {

  render() {
    let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    if (this.props.settings) {
      settings = {...settings, ...this.props.settings};
    }
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {this.props.children}
        </Slider>
      </div>
    );
  }
}


export default Carousel
