import React from 'react';

import database from './firebase';

class Graphics extends React.Component {
  state = {
    values: [],
  };

  componentWillMount() {
    let incomingValues = database.ref('Pot');

    incomingValues.on('value', snapshot => {
      let incomingValue = snapshot.val();

      this.setState({ 
        values: this.state.values.concat(incomingValue),
        value: incomingValue
      });
    });
  }

  //getIncomingValue = () => {
  //  return this.state.value;
  //};

  render() {
    return (
      <div>
        <h3>{ this.props.label }</h3>

        <span>This is the current value: { this.state.value }</span>
      </div>
    );
  }
}

export default Graphics;
