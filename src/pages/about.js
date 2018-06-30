import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section';
import Carousel from '../components/carousel';
import aboutImage from '../images/about.jpg';

import priyanka from '../images/priyanka.jpg';
import anshulika from '../images/anshulika.jpg';
import shashwat from '../images/shashwat.jpg';
import suprateek from '../images/suprateek.jpg';
import apoorva from '../images/apoorva.jpg';
import dhruvi from '../images/dhruvi.jpg';
import anant from '../images/anant.jpg';
import nikita from '../images/nikita.jpg';

import corner from '../images/corner.png';

import financeService from '../images/finance.jpg';
import distributionService from '../images/distribution.jpg';
import festivalService from '../images/festival.jpg';
import publicityService from '../images/publicity.jpg';

class IndexPage extends React.PureComponent {

  render() {
    const team = [
      {
        name: "Priyanka",
        image: priyanka,
        title: "",
      },
      {
        name: "Anshulika",
        image: anshulika,
        title: "",
      },
      {
        name: "Shashwat",
        image: shashwat,
        title: "",
      },
      {
        name: "Suprateek",
        image: suprateek,
        title: "",
      },
      {
        name: "Apoorva",
        image: apoorva,
        title: "",
      },
      {
        name: "Dhruvi",
        image: dhruvi,
        title: "",
      },
      {
        name: "Anant",
        image: anant,
        title: "",
      },
      {
        name: "Nikita",
        image: nikita,
        title: "",
      },
      {
        name: "",
        image: "",
        title: "",
      },
    ];

    const advisors = [
      {
        name: "Lorem Ipsum Dolor",
        image: priyanka
      },
      {
        name: "Lorem Ipsum Dolor",
        image: anshulika
      },
      {
        name: "Lorem Ipsum Dolor",
        image: shashwat
      },
      {
        name: "Lorem Ipsum Dolor",
        image: suprateek
      },
      {
        name: "Lorem Ipsum Dolor",
        image: apoorva
      }
    ];

    return (
      <div className="home">
        <div id="landing-section">
          <img src={aboutImage} alt="about-main"/>
          <div className="landing-text">
            <h2><span>Wishberry Films</span><br />We finance, produce,<br />market and distribute<br />&quot;smart budget&quot; films</h2>
            <div className="separator"></div>
          </div>
        </div>
        <Section id="about-section" title="ABOUT US">
          <div className="about-text">
            <h5>Wishberry had the best interest of the film at heart and this project may not have taken off without their hard work, innovative thinking and 'can do' attitude. Wishberry had the best interest innovative thinking and 'can do' attitude.
            <br /><br />
            Wishberry had the best interest of the film at heart and this project may not have taken off without their hard work, innovative thinking and 'can do' attitude. Wishberry had the best interest of the film at heart and this project may not.
          </h5>
          </div>
        </Section>
        <Section id="team-section" title="THE TEAM">
          <div className="team">
            <img className="corner top-left" src={corner} alt="corner" />
            <img className="corner top-right" src={corner} alt="corner" />
            <img className="corner bottom-left" src={corner} alt="corner" />
            <img className="corner bottom-right" src={corner} alt="corner" />
            <div className="rec"></div>
            <div className="team-members">
              { team.map((item, key) => (
                <div key={key} className="member">
                  <img src={item.image} alt={item.name} />
                </div>
              ))}
            </div>
          </div>
        </Section>
        <Section id="advisor-section" title="BOARD OF ADVISORS">
          <Carousel
            settings={{ slidesToShow: 3 }}
          >
            { advisors.map((item, index) => (
              <div className="advisor-container">
                <div key={index} className="advisor">
                  <img src={item.image} alt={item.name} />
                </div>
                <h5>{item.name}</h5>
              </div>
            ))}
          </Carousel>
        </Section>
      </div>
    );
  }
}


export default IndexPage
