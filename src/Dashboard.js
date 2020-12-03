import React from 'react';

import Graphics from "./Graphics";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="App-dashboard">
        <Graphics label="🌡Temperatura (°C)" sensor="Temp"  chartId="T" />
        <Graphics label="💧Humedad (g/m³)" sensor="Hum"  chartId="H" />
      </div>
    );
  }
}

export default Dashboard;
