import React from 'react';

import Graphics from "./Graphics";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Graphics label="🌡Temperatura (°C)" sensor="Pot" />
        <Graphics label="💧Humedad" sensor="Pot" />
      </div>
    );
  }
}

export default Dashboard;
