import React from 'react'
import Link from 'gatsby-link'
import { ToastContainer, toast, Slide } from 'react-toastify';
import axios from 'axios';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import 'react-toastify/dist/ReactToastify.css';
import Section from '../components/section';
import Button from '../components/button';

import submit from '../images/submit.jpg';

class SubmitPage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      userName: undefined,
      phoneNumber: undefined,
      userEmail: undefined,
      filmName: undefined,
      directorName: undefined,
      filmSummary: undefined,
      pastWork: undefined,
      filmBudget: undefined,
      success: false,

    };
  }

  showSuccess = () => {
    toast.success("Submitted Successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000
    });
  }

  showError = () => {
    toast.error("Error in Submission!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000
    });
  }

  handleChange = (event, field) => {
    let updatedState = this.state;
    updatedState[field] = event.target.value;
    this.setState(updatedState);
  }

  onSelect = (selected) => {
    this.setState({ filmBudget: selected.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    axios.post('https://wishberry-films.herokuapp.com/api/creator/lead/create', this.state)
    .then(function (response) {
      console.log(response);
      if (response.data && response.data.success) {
        event.target.reset();
        this.showSuccess();
      } else {
        this.showError();
      }
    })
    .catch(function (error) {
      console.log(error);
      this.showError();
    });
  }
  render() {
    const options = [
      {
        value: 'less than Rs. 1 Cr',
        label: 'less than Rs. 1 Cr',
        className: 'drop-option'
      },
      {
        value: 'between Rs. 1 Cr and 2 Cr',
        label: 'between Rs. 1 Cr and 2 Cr',
        className: 'drop-option'
      },
      {
        value: 'between Rs. 3 Cr and 5 Cr',
        label: 'between Rs. 3 Cr and 5 Cr',
        className: 'drop-option'
      }
    ];
    return (
      <div className="home">
        <div id="landing-section" className="small">
          <img className="media" src={submit} />
          <div className="landing-text">
            <h2>Share your project<br />and other basic<br /><span>details</span></h2>
          </div>
        </div>
        <Section id="submit-section" title="HERE WE GO">
          <ToastContainer transition={Slide} hideProgressBar/>
          <div className="form-container">
            <form onSubmit={this.onSubmit} noValidate>
              <div className="form">
                <div className="form-component required">
                  <label>
                    Your Name
                  </label>
                  <input className="form-input" type="text" name="userName" value={this.state.userName} onChange={(e) => this.handleChange(e, 'userName')} required/>
                </div>
                <div className="form-component required">
                  <label>
                    Phone Number
                  </label>
                  <input className="form-input" type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={(e) => this.handleChange(e, 'phoneNumber')} required/>
                </div>
                <div className="form-component required">
                  <label>
                    Email ID
                  </label>
                  <input className="form-input" type="text" name="userEmail" value={this.state.userEmail} onChange={(e) => this.handleChange(e, 'userEmail')} required/>
                </div>
                <div className="form-component required">
                  <label>
                    Name of Film
                  </label>
                  <input className="form-input" type="text" name="filmName" value={this.state.filmName} onChange={(e) => this.handleChange(e, 'filmName')} required/>
                </div>
                <div className="form-component required">
                  <label>
                    Name of Director
                  </label>
                  <input className="form-input" type="text" name="directorName" value={this.state.directorName} onChange={(e) => this.handleChange(e, 'directorName')} required/>
                </div>
                <div className="form-component required">
                  <div>
                    <label>
                      Film Synopsis
                    </label>
                    <textarea type="text" name="filmSummary" value={this.state.filmSummary} onChange={(e) => this.handleChange(e, 'filmSummary')} required/>
                  </div>
                </div>
                <div className="form-component required">
                  <label>
                    Budget Range
                  </label>
                  <Dropdown
                    options={options}
                    onChange={this.onSelect}
                    placeholder="Select Budget"
                    controlClassName="form-input"
                    className="dropdown"
                    arrowClassName="drop-arrow"
                    menuClassName="drop-menu"
                    value={this.state.filmBudget}
                  />
                  <div className="help-text">*We mainly work with films that are under 2 Crores.</div>
                </div>
                <div className="form-component">
                  <label>
                    Past Work
                  </label>
                  <input className="form-input" type="text" name="pastWork" value={this.state.pastWork} onChange={(e) => this.handleChange(e, 'pastWork')} />
                </div>

              </div>
              <div className="form-submit">
                <Button type="submit" size="16px">SUBMIT</Button>
              </div>
            </form>
          </div>
        </Section>
      </div>
    );
  }
}


export default SubmitPage
