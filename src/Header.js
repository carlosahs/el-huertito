import React from 'react';

import menuClosed from "./svg/menu-closed.svg";
import menuOpened from "./svg/menu-opened.svg";

class Header extends React.Component {
  state = {
    closed: false,
  };

  onToggleMenu = (evt) => {
    this.props.onToggleMenu(evt);

    this.setState({ closed: !this.state.closed });
  };

  render() {
    return (
      <header className="App-header">
        <img 
          src={this.state.closed ? menuClosed : menuOpened}
          alt="Navigation menu"
          onClick={this.onToggleMenu}
        />
        <span>🎑El Huertito🎑</span>
      </header>
    );
  }
}

export default Header;
