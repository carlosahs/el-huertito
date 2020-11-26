import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <h1>Menu</h1>

        <ul>
          <li>🏡Resumen del dia</li>
          <li>🌱Mis plantas</li>
          <li>🌳Seleccionar planta</li>
          <li>ℹStatus de sensores</li>
          <li>📊Historial de datos</li>
        </ul>

        <span>❔Tutoriales y ayuda</span>
        <small>Made by ITESM 💙🏫💙</small>
      </div>
    );
  }
}

export default Menu;
