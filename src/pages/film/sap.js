import React from 'react'
import Link from 'gatsby-link'

import Header from '../../components/header';
import Section from '../../components/section';
import Gallery from '../../components/gallery';

import films from '../../data/data';

import linkArrow from '../../images/link-arrow.png';
import downArrow from '../../images/down-arrow.png';
import soon from '../../images/soon.png';

class FilmPage extends React.PureComponent {

  scrollPage = () => {
    const height = window.innerHeight;
    window.scrollBy({top: height, left: 0, behavior: 'smooth'});
  }

  createMarkup = (text) => {
    return {__html: text};
  }

  render() {
    const film = films.sap;
    return (
      <div>
        <Header />
        <div className="home">
          <div id="cover-section">
            <img className="media" src={film.coverImage} alt="cover"/>
            <div className="cover-text">
              <h2>{film.title}</h2>
              <div className="status">{film.status}</div>
              <div className="details">{film.runtime && <span>{film.runtime} minutes | </span>}{film.language} | {film.category}</div>
            </div>
            <div className="learn-more-container" onClick={this.scrollPage}>
              <p className="learn-more-text">See more</p>
              <img src={downArrow} className="learn-more-icon" />
            </div>
          </div>
          <Section title="DIRECTOR">
            <div className="director-section">
              <div className="director-text">
                <h5 dangerouslySetInnerHTML={this.createMarkup(film.director.text)}></h5>
              </div>
              <div className="director-image">
                <img src={film.director.image} alt={film.director.name} />
              </div>
            </div>
          </Section>
          { film.producer &&
            <Section title={film.producer.title}>
              <div className="director-section">
                <div className="director-text">
                  <h5 dangerouslySetInnerHTML={this.createMarkup(film.producer.text)}></h5>
                </div>
                <div className="director-image">
                  <img src={film.producer.image} alt={film.producer.name} />
                </div>
              </div>
            </Section>
          }
          <Section title="SYNOPSIS">
            <div className="synopsis-section">
              <div className="synopsis-text">
                <h5 dangerouslySetInnerHTML={this.createMarkup(film.synopsis.text)}></h5>
                { film.facebook &&
                  <a className="synopsis-link" href={film.facebook} target="_blank">
                    <img src={linkArrow} alt="link" />
                    <p>FACEBOOK</p>
                  </a>
                }
                { film.website &&
                  <a className="synopsis-link" href={film.website} target="_blank">
                    <img src={linkArrow} alt="link" />
                    <p>WEBSITE</p>
                  </a>
                }
              </div>
              { film.festivals &&
                <div className="synopsis-image">
                  { film.festivals.map((item, key) => (
                    <img key={key} src={item} alt="Synopsis" />
                  ))}
                </div>
              }
            </div>
          </Section>
          { film.cast ?
            <Section title="CAST">
              <div className="cast-container">
                <div className="cast-list">
                  { film.cast.map((item, key) => (
                    <div key={key} className="cast">
                      <img src={item.image} alt={item.name} />
                      <div className="cast-gradient"></div>
                      <h6>{item.name}</h6>
                    </div>
                  ))}
                  <div className="cast"></div>
                </div>
              </div>
            </Section>
            :
            <Section title="CAST">
              <div className="cast-container">
                <div className="cast-list">
                  <div className="cast no-radius">
                    <img src={soon} alt="Coming Soon" />
                  </div>
                  <div className="cast"></div>
                </div>
              </div>
            </Section>
          }
          { film.gallery &&
            <div className="photo-container">
              <Gallery tiles={film.gallery} poster={film.poster} />
            </div>
          }
        </div>
      </div>
    );
  }
}


export default FilmPage
