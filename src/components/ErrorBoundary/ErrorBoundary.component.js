import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: null };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Something went wrong :/.</h1>;
    }
    return children;
  }
}

ErrorBoundaryComponent.propTypes = {
  children: PropTypes.element.isRequired
};

export default ErrorBoundaryComponent;
