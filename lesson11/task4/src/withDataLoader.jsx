import React from 'react';
import Spinner from './Spinner.jsx';

export const withDataLoader = (URL,WrappedComponent) => {

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
    }
    fetchedData = fetch(URL)
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));

    render() {
      if (this.state.data === null) return <Spinner size={50} />;
      return <WrappedComponent data={this.state.data} />;
    }
  };
};

























