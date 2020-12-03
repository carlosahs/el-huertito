import React from 'react';
import { Chart } from 'react-google-charts';

import database from './firebase';

class Graphics extends React.Component {
  state = {
    entries: [["Timestamp", "Value"]],
    currentValue: 0,
    lastEntry: [],
    databasePath: 'History/' + this.props.sensor,
  };

  uploadNewEntry = (entry) => {
    let newEntryKey = database.ref().child(this.state.databasePath).push().key;

    let update = {};
    update[this.state.databasePath + '/' + newEntryKey] = entry;

    return database.ref().update(update);
  };

  componentWillMount() {
    let incomingValues = database.ref(this.props.sensor);

    incomingValues.on('value', snapshot => {
      let incomingValue = snapshot.val();
      let newEntry = [Date(Date.now()), incomingValue];

      this.setState({ 
        entries: this.state.entries.concat([newEntry]),
        currentValue: incomingValue,
        lastEntry: newEntry
      });

      this.uploadNewEntry(newEntry);
    });
  }

  //componentDidMount() {
  //  let sensorHistory = database.ref('History/' + this.props.sensor).get 
  //}

  render() {
    return (
      <div>
        <h3>{ this.props.label } { this.state.currentValue }</h3>

        <Chart
          width={'100%'}
          height={'200px'}
          chartType='LineChart'
          loader={<div>Loading data</div>}
          data={this.state.entries}
          options={{
            hAxis: {
              title: 'Date',
            },
            vAxis: {
              title: this.props.sensor,
            },
          }}
        />
      </div>
    );
  }
}

export default Graphics;
