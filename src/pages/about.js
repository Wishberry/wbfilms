import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/header';
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

const vikramaditya = "https://s3.ap-south-1.amazonaws.com/aw-files-1-118130771025/vikramaditya.jpg";
const shibashish = "https://s3.ap-south-1.amazonaws.com/aw-files-1-118130771025/shibashish.jpg";
const sunil = "https://s3.ap-south-1.amazonaws.com/aw-files-1-118130771025/sunil.jpg";
const arjun = "https://s3.ap-south-1.amazonaws.com/aw-files-1-118130771025/arjun.png";

class IndexPage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selection: -1,
      isMobile: false,
    };
  }

  createMarkup = (text) => {
    return {__html: text};
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
          title: "Production & Distribution",
          linkedin: "https://www.linkedin.com/in/singh-shashwat",
        },
        {
          name: "Suprateek",
          image: suprateek,
          quote: "\"Happiness is in doing, not in getting what you want.\"",
          quoteFilm: "Before Sunset",
          title: "Content",
          linkedin: "https://in.linkedin.com/in/suprateek-chatterjee-7b515a130",
        }
      ],
      row2: [
        {
          name: "Dhruvi",
          image: dhruvi,
          quote: "\"All you have to do is listen.\"",
          quoteFilm: "August Rush",
          title: "Marketing & Publicity",
          linkedin: "https://in.linkedin.com/in/dhruvi-narsaria-ab4060130",
        },
        {
          name: "Apoorva",
          image: apoorva,
          quote: "\"Don't let the muggles get you down.\"",
          quoteFilm: "Harry Potter and the Prisoner of Azkaban",
          title: "Investor Relations",
          linkedin: "https://www.linkedin.com/in/apoorvaa-agarwal-35834478/",
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
          title: "Investor Relations",
          linkedin: "https://in.linkedin.com/in/ahujanikita136",
        },
        {
          name: "Mohanish",
          image: mohanish,
          quote: "\"Gentlemen. You can't fight in there. This is the war room!\"",
          quoteFilm: "Dr. Strangelove",
          title: "Distribution ",
          linkedin: "https://www.linkedin.com/in/mohanishvaidya/",
        }
      ]
    };

    const advisors = [
      {
        name: "Shibasish Sarkar",
        title: "COO<br/>Reliance Big Entertainment<br/>",
        image: shibashish
      },
      {
        name: "Dr. Sunil Patil",
        title: "Director on the Board<br/>Scrabble Entertainment Limited<br/>",
        image: sunil
      },
      {
        name: "Vikramaditya Motwane",
        title: "Film Director (Udaan, Bhavesh Joshi)<br/>Co-Owner, Phantom Films",
        image: vikramaditya
      },
      {
        name: "Arjun Mudda",
        title: "Founder & Director<br/>MumbaiBeats<br/>",
        image: arjun
      }
    ];

    return (
      <div>
        <Header />
        <div className="home">
          <div className="about-container">
            <img className="cover-image" src="https://s3.ap-south-1.amazonaws.com/aw-files-1-118130771025/about-cover.jpg" alt="cover" />
            <div id="landing-section">
              <div className="landing-text">
                <h2>A good film,<br/>a smart budget<br/>and some caramel<br/>popcorn, <span>priceless!</span></h2>
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
                Wishberry is now launching Wishberry Films - a new-age, content-driven, film financing platform, that believes in balancing the equation between art and commerce. We believe that a good story and a smart budget is all that’s needed to make films a lucrative investment opportunity for HNIs.
                <br/><br/>
                Wishberry Films will finance, produce, market & distribute films with universal and regional stories from India. And help HNIs discover and invest in such films.
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
          </div>
          <Section id="advisor-section" title="BOARD OF ADVISORS">
            <div className="advisor-container">
              <Carousel
                settings={this.state.isMobile ? {} : { slidesToShow: 4, infinite: false, arrows: false, autoplay: false }}
              >
                { advisors.map((item, index) => (
                  <div key={index} className="advisors">
                    <div className="advisor">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <h5>{item.name}</h5>
                    <h6 dangerouslySetInnerHTML={this.createMarkup(item.title)}></h6>
                  </div>
                ))}
              </Carousel>
            </div>
          </Section>
        </div>
      </div>
    );
  }
}


export default IndexPage
