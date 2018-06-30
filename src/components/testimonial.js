import React from 'react'
import Link from 'gatsby-link'
import Slider from "react-slick";

class Testimonial extends React.PureComponent {

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <Slider>
        { this.props.list.map((item, index) => (
          <div key={index} className="quote">
            <h4>"{item.quote}"</h4>
            <div className="author">
              <h5 className="name">{item.name}</h5>
              <div className="title">{item.title}</div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}


export default Testimonial
