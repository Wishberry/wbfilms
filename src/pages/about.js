import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section';
import Button from '../components/button';
import FilmCard from '../components/filmCard';
import Testimonial from '../components/testimonial';
import aboutImage from '../images/about.jpg';

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
    const team = [
      {
        name: "",
        image: "",
        title: "",
      },
      {
        name: "",
        image: "",
        title: "",
      },
      {
        name: "",
        image: "",
        title: "",
      },
      {
        name: "",
        image: "",
        title: "",
      },
      {
        name: "",
        image: "",
        title: "",
      },
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
            <svg class="desktop" viewBox="0 0 100 100">
              <path d="M10,5 L5,5 L5,10" fill="none" stroke="black" stroke-width="5" />
              <path d="M2,90 L2,98 L10,98" fill="none" stroke="black" stroke-width="5" />
              <path d="M90,98 L98,98 L98,90" fill="none" stroke="black" stroke-width="5" />
              <path d="M98,10 L98,2 L90,2" fill="none" stroke="black" stroke-width="5" />
            </svg>

          </div>
        </Section>
      </div>
    );
  }
}


export default IndexPage
