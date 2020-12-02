import React from 'react';
import { Chart } from 'react-google-charts';

import database from './firebase';


class Graphics extends React.Component {
  state = {
    values: [["Timestamp", "Value"]],
    value: 0,
  };

  componentWillMount() {
    let incomingValues = database.ref(this.props.sensor);

    incomingValues.on('value', snapshot => {
      let incomingValue = snapshot.val();

      this.setState({ 
        values: this.state.values.concat([[Date(Date.now()), incomingValue]]),
        value: incomingValue
      });
    });
  }

  render() {
    return (
      <div>
        <h3>{ this.props.label }</h3>

        <span>This is the current value: { this.state.value }</span>

        <Chart
          width={'100vw'}
          height={'200px'}
          chartType='LineChart'
          loader={<div>Loading data</div>}
          data={this.state.values}
          options={{
            hAxis: {
              title: 'Date',
            },
            vAxis: {
              title: 'Value',
            },
          }}
        />
      </div>
    );
  }
}

export default Graphics;
