import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section';
import Button from '../components/button';
import FilmCard from '../components/filmCard';
import Carousel from '../components/carousel';
import Frame from '../components/frame';
import Header from '../components/headerNew';
import Footer from '../components/footerNew';
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
        url: "/film/chuskit",
      },
      {
        title: "Chippa",
        image: chippa,
        url: "/film/chippa",
      },
      {
        title: "Sethum Aayiram Pon (Roots)",
        image: sap,
        url: "/film/sap",
      },
      {
        title: "Zollywood",
        image: zollywood,
        url: "/film/zollywood",
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

    return (
      <div>
      <Header />
      <div className="home">
        <div id="landing-section">
          <video className="media" autoPlay loop muted src="https://s3.ap-south-1.amazonaws.com/aw-files-1-118130771025/videoplayback.mp4"></video>
          <div className="landing-text">
            <h2>India's first<br />crowd-financing<br />studio for new age<br />cinema</h2>
            <Button size="16px">SUBMIT FILM</Button>
          </div>
        </div>
        <Section id="films-section" title="OUR FILMS">
          <div className="card-container">
            { films.map((film, key) => {
              return (<FilmCard
                key={key}
                image={film.image}
                title={film.title}
                url={film.url}
              />)
            })}
          </div>
        </Section>
        <Section id="services-section" title="OUR SERVICES">
          <div className="services-container">
            <div className="service-list">
              { services.map((item, key) => (
                <div key={key} className="service">
                  <img src={item.image} alt={item.name} />
                  <h6>{item.name}</h6>
                </div>
              ))}
            </div>
            <div className="service-submit">
              <Button size="18px">
                SUBMIT FILM
              </Button>
            </div>
          </div>
        </Section>
        <Section id="testimonial-section" title="TESTIMONIALS">
          <div className="quote-container">
            <Frame>
              <Carousel settings={{ arrows: false }}>
                <div className="quote">
                  <h5>"Wishberry had the best interest of the film at heart and this project may not have taken off without their hard work, innovative thinking and 'can do' attitude."</h5>
                  <div className="author">
                    <h6 className="name">Priya Ramasubban</h6>
                    <div className="title">Director - Chuskit | Documentary<br />filmmaker - Nat Geo, Discovery</div>
                  </div>
                </div>
                <div className="quote">
                  <h5>"I trust their strategy on film selection and their estimation of a movie’s saleability quotient, two integral aspects of validating a film investment."</h5>
                  <div className="author">
                    <h6 className="name">Abhishek Agarwal</h6>
                    <div className="title">Designated Partner at Rockstud<br />Capital | Investor in Chuskit</div>
                  </div>
                </div>
                <div className="quote">
                  <h5>"It has truly been amazing working with Wishberry right from the first narration meeting. Literally 8 days later, they called me back for a narration with an interested investor and the deal was locked within 48 hours!"</h5>
                  <div className="author">
                    <h6 className="name">Celine Loop</h6>
                    <div className="title">Producer - Chippa | <br />Producer - Brahman Naman</div>
                  </div>
                </div>
              </Carousel>
            </Frame>
          </div>
        </Section>
      </div>
      <Footer />
    </div>
    );
  }
}


export default IndexPage
