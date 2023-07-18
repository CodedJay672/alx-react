import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  // get the display name
  const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  // customize the display name for the component
  WrappedComponent.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

  return class extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted on`);
    }

    componentWillUnmount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;