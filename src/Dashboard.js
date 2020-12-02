import React from 'react';

import Graphics from "./Graphics";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Graphics label="🌡Temperatura (°C)" sensor="Pot"  chartId="T" />
        <Graphics label="💧Humedad" sensor="Pot"  chartId="H" />
      </div>
    );
  }
}

export default Dashboard;
