import React from 'react'
import Link from 'gatsby-link'
import { ToastContainer, toast, Slide } from 'react-toastify';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import { Formik, Form, Field, FieldArray } from 'formik';
import 'react-dropdown/style.css'
import 'react-toastify/dist/ReactToastify.css';

import Header from '../components/header';
import Section from '../components/section';
import Button from '../components/button';

const submit = "https://s3.ap-south-1.amazonaws.com/aw-files-1-118130771025/submit-cover.jpg";


class SubmitPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wordCount: 0,
      pastWork: []
    };
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://cdn1.pdmntn.com/a/4JQNDStMr.js";

    document.body.appendChild(script);
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

  updateWordCount = (event) => {
    const wordArray = event.target.value.split(" ");
    if(wordArray.length > 250) {
      wordArray.length = 250;
      const text = wordArray.join(" ");
      event.target.value = text;
    }
    this.setState({wordCount: wordArray.length});
  }
  onSubmit = (values) => {
    const data = {...values};
    if(data.pastWork) {
      data.pastWork = data.pastWork.join(", ");
    }
    let phoneNumber = data.phoneNumber.join("");
    if(phoneNumber.charAt(0) === '+'){
      phoneNumber = phoneNumber.slice(1);
    }
    data.phoneNumber = parseInt(phoneNumber);
    event.preventDefault();
    axios.post('https://wishberry-films.herokuapp.com/api/creator/lead/create', data)
    .then(function (response) {
      console.log(response);
      if (response.data && response.data.success) {
        event.target.reset();
        this.showSuccess();
      } else {
        this.showError();
      }
    })
    .catch((error) => {
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
            <ToastContainer transition={Slide} hideProgressBar/>
            <div className="form-container">

              <Formik
                initialValues={{ pastWork: [''] }}
                onSubmit={this.onSubmit}
                render={({
                  values,
                  errors,
                  touched,
                  setFieldValue,
                  setFieldTouched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form>
                    <div className="form">
                      <div className="form-component required">
                        <label>
                          Your Name
                        </label>
                        <Field className="form-input" type="text" name="userName" required/>
                      </div>
                      <div className="form-component required">
                        <label>
                          Phone Number
                        </label>
                        <FieldArray name="phoneNumber">
                          <div className="form-input-group">
                            <Field className="form-input tel-short" maxLength={4} type="tel" name="phoneNumber.0" placeholder="+91" required/>
                            <Field className="form-input tel-long" maxLength={10} type="tel" name="phoneNumber.1" placeholder="Your Phone Number" required/>
                          </div>
                        </FieldArray>
                      </div>
                      <div className="form-component required">
                        <label>
                          Email ID
                        </label>
                        <Field className="form-input" type="email" name="userEmail" required/>
                      </div>
                      <div className="form-component required">
                        <label>
                          Name of Film
                        </label>
                        <Field className="form-input" type="text" name="filmName" required/>
                      </div>
                      <div className="form-component required">
                        <label>
                          Name of Director
                        </label>
                        <Field className="form-input" type="text" name="directorName" required/>
                      </div>
                      <div className="form-component required">
                        <div className="text-area-words">Words: {this.state.wordCount}/250</div>
                        <div>
                          <label>
                            Film Synopsis
                          </label>
                          <Field
                            component="textarea"
                            onChange={(e) => {
                              this.updateWordCount(e)
                              handleChange(e)
                            }}
                            name="filmSummary"
                            value={values.filmSummary}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-component required">
                        <label>
                          Budget Range
                        </label>
                        <Dropdown
                          options={options}
                          onChange={(selected) => setFieldValue('filmBudget', selected.value)}
                          onBlur={() => setFieldTouched('filmBudget', true)}
                          error={errors.topics}
                          touched={touched.topics}
                          placeholder="Select Budget"
                          controlClassName="form-input"
                          className="dropdown"
                          arrowClassName="drop-arrow"
                          menuClassName="drop-menu"
                          value={values.filmBudget}
                        />

                        <div className="help-text">*We mainly work with films that are under 2 Crores.</div>
                      </div>
                      <div className="form-component">
                          <label>
                            Past Work (Upto 5)
                          </label>
                          <FieldArray
                            name="pastWork"
                            render={arrayHelpers => (
                              <div className="form-input-list">
                                {values.pastWork && values.pastWork.map( (item, index) =>
                                  <div key={index} className="input-with-action">
                                    <Field className="form-input" placeholder="Add links, example - www.abc.com" type="text" name={`pastWork.${index}`}/>
                                    {index === 0 ?
                                      <a
                                        className={values.pastWork.length >= 5 ? "add-input disabled" : "add-input"}
                                        onClick={() => arrayHelpers.push('')}
                                      >
                                        &#43;
                                      </a>
                                      :
                                      <a
                                        className="remove-input"
                                        onClick={() => arrayHelpers.remove(index)}
                                      >
                                        -
                                      </a>
                                    }
                                  </div>
                                )}
                              </div>
                            )}
                          >
                            {/* <div className="form-input-list">
                              <div className="input-with-action">
                                <Field className="form-input" placeholder="Add links, example - www.abc.com" type="text" name="pastWork.0"/>
                                <a
                                  className="add-input"
                                  onClick={this.addField}
                                >
                                  &#43;
                                </a>
                              </div>
                              {this.state.pastWork.map( (item, index) =>
                                <div key={index} className="input-with-action">
                                  <Field className="form-input" placeholder="Add links, example - www.abc.com" type="text" name={`pastWork.${item}`}/>
                                  <a
                                    className="remove-input"
                                    onClick={() => this.removeField(index)}
                                  >
                                    -
                                  </a>
                                </div>
                              )}
                            </div> */}
                          </FieldArray>
                      </div>

                    </div>
                    <div className="form-submit">
                      <Button type="submit" size="16px">SUBMIT</Button>
                    </div>

                  </Form>
                )}
              />
            </div>
          </Section>
        </div>
      </div>
    );
  }
}


export default SubmitPage
