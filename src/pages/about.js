import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section';
import Carousel from '../components/carousel';
import Frame from '../components/frame';
import TooltipComponent from '../components/tooltip';
import aboutImage from '../images/about.jpg';
import downArrow from '../images/down-arrow.png';

import priyanka from '../images/priyanka.jpg';
import anshulika from '../images/anshulika.jpg';
import shashwat from '../images/shashwat.jpg';
import suprateek from '../images/suprateek.jpg';
import apoorva from '../images/apoorva.jpg';
import dhruvi from '../images/dhruvi.jpg';
import anant from '../images/anant.jpg';
import nikita from '../images/nikita.jpg';
import mohanish from '../images/mohanish.jpg';

import corner from '../images/corner.png';
import linkedin from '../images/linkedin.png';

class IndexPage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selection: -1,
      isMobile: false,
    };
  }

  componentDidMount() {
    if(window.innerWidth <= 500) {
      this.setState({ isMobile: true });
    }
    else {
      this.setState({ isMobile: false });
    }
    document.addEventListener('click', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  scrollPage = () => {
    const height = window.innerHeight;
    window.scrollBy({top: height, left: 0, behavior: 'smooth'});
  }

  handleClickOutside = (event) => {
    if(!event.cancelBubble){
      this.setState({ selection: -1 });
    }
  }

  handleClick = (event, pos) => {
    if(this.state.selection !== pos){
      event.stopPropagation();
      this.setState({ selection: pos });
    }
  }

  openLinkedin = (url) => {
    window.open(url, "_blank");
  }

  render() {

    const team = {
      row1: [
        {
          name: "Priyanka",
          image: priyanka,
          quote: "\"Show me the monnnneeeeeyyyyy.\"",
          quoteFilm: "Jerry Maguire",
          title: "Co-Founder",
          linkedin: "https://in.linkedin.com/in/priyankapagarwal",
        },
        {
          name: "Anshulika",
          image: anshulika,
          quote: "\"I guess when you’re young, you just believe there’ll be many people with whom you’ll connect with. Later in life, you realize it only happens a few times.\"",
          quoteFilm: "Before Sunset",
          title: "Co-Founder",
          linkedin: "https://in.linkedin.com/in/anshulikadubey",
        },
        {
          name: "Shashwat",
          image: shashwat,
          quote: "\"Every path is the right path. Everything could have been anything else, and it would have just as much meaning.\"",
          quoteFilm: "Mr. Nobody",
          title: "Production",
          linkedin: "https://www.wishberry.in/wishberry-team/www.linkedin.com/in/singh-shashwat",
        },
        {
          name: "Suprateek",
          image: suprateek,
          quote: "\"Happiness is in doing, not in getting what you want.\"",
          quoteFilm: "Before Sunset",
          title: "Content",
          linkedin: "#",
        }
      ],
      row2: [
        {
          name: "Apoorva",
          image: apoorva,
          quote: "\"Don't let the muggles get you down.\"",
          quoteFilm: "Harry Potter and the Prisoner of Azkaban",
          title: "Investor Relations",
          linkedin: "https://www.linkedin.com/in/apoorvaa-agarwal-35834478/",
        },
        {
          name: "Dhruvi",
          image: dhruvi,
          quote: "\"All you have to do is listen.\"",
          quoteFilm: "August Rush",
          title: "Marketing & Publicity",
          linkedin: "#",
        },
        {
          name: "Anant",
          image: anant,
          quote: "\"I remembered what my Nonlinear Equations professor once told me, always account for variable change.\"",
          quoteFilm: "21",
          title: "Investor Relations",
          linkedin: "https://www.linkedin.com/in/anant-agarwal-a4375290/",
        },
        {
          name: "Nikita",
          image: nikita,
          quote: "\"It’s sort of like how they say that other dimensions exist all around us, but we don’t have the ability to perceive them. That’s - That’s what I want out of any relationship. Or just life, I guess.\"",
          quoteFilm: "Frances Ha",
          title: "Festival Strategy",
          linkedin: "https://in.linkedin.com/in/ahujanikita136",
        },
        {
          name: "Mohanish",
          image: mohanish,
          quote: "\"Gentlemen. You can't fight in there. This is the war room!\"",
          quoteFilm: "Dr. Strangelove",
          title: "Manager, Distribution ",
          linkedin: "https://www.linkedin.com/in/mohanishvaidya/",
        }
      ]
    };

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
          <img className="media" src={aboutImage} alt="about-main"/>
          <div className="landing-text">
            <h2>We finance,<br />produce, market<br />and distribute<span>&quot;smart<br />budget&quot; films</span></h2>
          </div>
          <div className="learn-more-container" onClick={this.scrollPage}>
            <p className="learn-more-text">See more</p>
            <img src={downArrow} className="learn-more-icon" />
          </div>
        </div>
        <Section id="about-section" title="ABOUT US">
          <div className="about-text">
            <h5>In 2012, Wishberry premiered the concept of crowdfunding in India for Independent filmmakers. Over 400 media projects have raised over 2 million dollars using the platform's rewards-based crowdfunding model from over 15,000 people across the world.
            <br /><br />
            Leveraging on its experience in supporting indie cinema, Wishberry is now extending its digital platform to allow High Net Worth Individuals (HNIs) to discover and invest in low budget cinema in exchange for a share of the film’s profits.
          </h5>
          </div>
        </Section>
        <Section id="team-section" title="THE TEAM">
          <div className="team">
            <div className="team-row">
              { team.row1.map((item, key) => (
                <div key={key} className={this.state.selection ===  key ? "member active" : "member"}>
                  <TooltipComponent text={item.quote} caption={item.quoteFilm}>
                    <a onClick={(event) => this.handleClick(event, key)}>
                      <div className="team-overlay">
                        <p>{item.name}<br /><br />{item.title}</p>
                      </div>
                      <img src={item.image} alt={item.name} />
                    </a>
                  </TooltipComponent>
                  <a className="linkedin" onClick={() => this.openLinkedin(item.linkedin)}>
                    <img src={linkedin} alt="linkedin" />
                  </a>
                </div>
              ))}
            </div>
            <div className="team-row" >
              { team.row2.map((item, key) => (
                <div key={key + team.row1.length} className={this.state.selection ===  (key + team.row1.length) ? "member active" : "member"}>
                  <TooltipComponent text={item.quote} caption={item.quoteFilm}>
                    <a onClick={(event) => this.handleClick(event, (key + team.row1.length))}>
                      <div className="team-overlay">
                        <p>{item.name}<br /><br />{item.title}</p>
                      </div>
                      <img src={item.image} alt={item.name} />
                    </a>
                  </TooltipComponent>
                  <a className="linkedin" onClick={() => this.openLinkedin(item.linkedin)}>
                    <img src={linkedin} alt="linkedin" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Section>
        <Section id="advisor-section" title="BOARD OF ADVISORS">
          <div className="advisor-container">
            <Carousel
              settings={this.state.isMobile ? {} : { slidesToShow: 3 }}
            >
              { advisors.map((item, index) => (
                <div key={index} className="advisors">
                  <div className="advisor">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <h5>{item.name}</h5>
                </div>
              ))}
            </Carousel>
          </div>
        </Section>
      </div>
    );
  }
}


export default IndexPage
