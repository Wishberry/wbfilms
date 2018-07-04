import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section';
import Header from '../components/header';
import Footer from '../components/footer';
import Button from '../components/button';

import submit from '../images/submit.jpg';


class SubmitPage extends React.PureComponent {

  onSubmit = () => {
    console.log("submit");
  }
  render() {
    return (
      <div>
      <Header />
      <div className="home">
        <div id="landing-section" className="small">
          <img className="media" src={submit} />
          <div className="landing-text">
            <h2>Share your project<br />and other basic<br /><span>details</span></h2>
          </div>
        </div>
        <Section id="submit-section" title="HERE WE GO">
          <div className="form-container">
            <form onSubmit={this.onSubmit}>
              <div className="form-row">
                <label>
                  Your Name:
                  <input type="text" name="name" />
                </label>
                <label>
                  Phone Number:
                  <input type="text" name="phone" />
                </label>
                <label>
                  Email ID:
                  <input type="text" name="email" />
                </label>
                <label>
                  Name of Film:
                  <input type="text" name="film" />
                </label>
                <label>
                  Name of Director:
                  <input type="text" name="director" />
                </label>
                <label>
                  Film Synopsis:
                  <input type="text" name="synopsis" />
                </label>
                <label>
                  Budget Range:
                  <input type="text" name="budget" />
                </label>
                <label>
                  Past Work(Optional):
                  <input type="text" name="work" />
                </label>
              </div>
              <Button type="submit" size="16px">SUBMIT</Button>

            </form>
          </div>
        </Section>
      </div>
      {/* <Footer /> */}
    </div>
    );
  }
}


export default SubmitPage
