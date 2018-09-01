// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
    
    (async () => {
      const rawResponse = await fetch('/api/formdata', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 1, b: 'Textual content'})
      });
      const content = await rawResponse.json();
    
      console.log(content);
    })();
    
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