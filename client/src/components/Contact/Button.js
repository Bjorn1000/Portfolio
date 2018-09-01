// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class Button extends Component {
  // Info on React PropTypes:
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    email: PropTypes.string.isRequired,
    formValues: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
  }

  logFormDataToConsole(event) {
    console.log('Form Values', this.props.formValues);
    
    
    
    this.setState({ isClicked: true });

  }

  render() {
    return (
      <a href="/complete">
        <button
          disabled={this.state.isClicked}
          onClick={this.logFormDataToConsole}
          className="btn btn-primary"
        >
          Submit
        </button>
      </a>
    );
  }
}

export default Button;