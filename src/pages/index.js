import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section';
import Button from '../components/button';
import FilmCard from '../components/filmCard';
import Carousel from '../components/carousel';
import vid from '../images/home.mp4';

import chuskit from '../images/chuskit.jpg';
import chippa from '../images/chippa.jpg';
import sap from '../images/sap.jpg';
import zollywood from '../images/zollywood.jpg';

import financeService from '../images/finance.jpg';
import distributionService from '../images/distribution.jpg';
import festivalService from '../images/festival.jpg';
import publicityService from '../images/publicity.jpg';

class IndexPage extends React.PureComponent {

  render() {
    const films = [
      {
        title: "Chuskit",
        image: chuskit,
      },
      {
        title: "Chippa",
        image: chippa,
      },
      {
        title: "Sethum Aayiram Pon (Roots)",
        image: sap,
      },
      {
        title: "Zollywood",
        image: zollywood,
      }
    ];

    const services = [
      {
        name: "FINANCE",
        image: financeService
      },
      {
        name: "DISTRIBUTION",
        image: distributionService
      },
      {
        name: "FESTIVAL STRATEGY",
        image: festivalService
      },
      {
        name: "PUBLICITY & DISTRIBUTION",
        image: publicityService
      },
    ];

    const testimonials = [
      {
        name: "Priya Ramasubban",
        title: "Director - Chuskit | Documentary filmmaker - Nat Geo, Discovery",
        quote: "Wishberry had the best interest of the film at heart and this project may not have taken off without their hard work, innovative thinking and 'can do' attitude.",
      },
      {
        name: "Priya Ramasubban",
        title: "Director - Chuskit | Documentary filmmaker - Nat Geo, Discovery",
        quote: "Wishberry had the best interest of the film at heart and this project may not have taken off without their hard work, innovative thinking and 'can do' attitude.",
      },
      {
        name: "Priya Ramasubban",
        title: "Director - Chuskit | Documentary filmmaker - Nat Geo, Discovery",
        quote: "Wishberry had the best interest of the film at heart and this project may not have taken off without their hard work, innovative thinking and 'can do' attitude.",
      }
    ]

    return (
      <div className="home">
        <div id="landing-section">
          <video className="media" autoPlay loop muted src="https://doc-0c-1s-docs.googleusercontent.com/docs/securesc/4aeu3am4ved93tu1bbhaalmi4tjpvrmp/cbutkedmjiifdg9lqd9kb6tbibfjn9uv/1530446400000/15541842174575554379/15541842174575554379/1cQhx9db_KT5BM6jrHkGfSLcq-T4i0CSG?h=05520853686249178583"></video>
          <div className="landing-text">
            <h2>India's first<br />crowd-financing<br />studio for new<br />age cinema</h2>
            <Button size="19px">SUBMIT FILM</Button>
          </div>
        </div>
        <Section id="films-section" title="OUR FILMS">
          <div className="card-container">
            { films.map((film, key) => {
              return (<FilmCard
                key={key}
                image={film.image}
                title={film.title}
              />)
            })}
          </div>
        </Section>
        <Section id="services-section" title="OUR SERVICES">
          <div className="services-container">
            <div className="service-list">
              { services.map((item, key) => (
                <a href="#" key={key}>
                  <div className="service">
                    <img src={item.image} alt={item.name} />
                    <h6>{item.name}</h6>
                  </div>
                </a>
              ))}
            </div>
            <div className="service-submit">
              <Button size="25px">
                SUBMIT FILM
              </Button>
            </div>
          </div>
        </Section>
        <Section id="testimonial-section" title="TESTIMONIALS">
          <Carousel>
            { testimonials.map((item, index) => (
              <div key={index} className="quote">
                <h4>"{item.quote}"</h4>
                <div className="author">
                  <h5 className="name">{item.name}</h5>
                  <div className="title">{item.title}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </Section>
      </div>
    );
  }
}


export default IndexPage
