import React from 'react';

import Graphics from "./Graphics";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Graphics label="🌡Temperatura (°C)" csensor="PPot" />
        <Graphics label="💧Humedad" sensor="0" />
      </div>
    );
  }
}

export default Dashboard;
