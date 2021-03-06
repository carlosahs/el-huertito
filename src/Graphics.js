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
    let warning = "";

    if (this.props.sensor == "Hum") {
      if (this.state.currentValue <= 300) warning = "Dry";
      else if (this.state.currentValue > 300 && this.state.currentValue <= 700) warning = "Humid"
      else if (this.state.currentValue > 700) warning = "In water"
    } else if (this.props.sensor == "Temp") {
      if (this.state.currentValue <= 15) warning = "Cold";
      else if (this.state.currentValue > 10 && this.state.currentValue <= 55) warning = "Warm"
      else if (this.state.currentValue > 55) warning = "Too hot"
    }

    return (
      <div>
        <h3>{ this.props.label } { this.state.currentValue }</h3>

        <span>{warning}</span>

        <Chart
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
