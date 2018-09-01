// Dependencies
import React, { Component } from 'react';
// Externals
import Field from './Field';
import Button from './Button';



class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div className="container">
        <h1>Contact Me</h1>
          <div className="form-group">
            <Field
              label="First Name"
              
              onChange={(event) => this.updateField('firstName', event.target.value)}
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <Field
              label="Last Name"
              onChange={(event) => this.updateField('lastName', event.target.value)}
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <Field
              label="Email"
              onChange={(event) => this.updateField('email', event.target.value)}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <Field
              label="Phone Number"
              onChange={(event) => this.updateField('phone', event.target.value)}
              value={this.state.phone}
            />
          </div>
          <div className="form-group">
            <Field
              label="Message"
              onChange={(event) => this.updateField('message', event.target.value)}
              /* This should be written like 'textarea' */
              textarea={true}
              value={this.state.message}
            />
          </div>

          <Button
            email="osbjorngulbranson@gmail.com"
            formValues={this.state}
          />

      </div>
    );
  }
}

export default Contact;