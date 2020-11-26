import React from 'react';

import hamburgerMenu from "./svg/hamburger-menu.svg";

class Header extends React.Component {
  onToggleMenu = (evt) => {
    this.props.onToggleMenu(evt);
  }

  render() {
    return (
      <header>
        <img 
          src={hamburgerMenu}
          alt="Navigation menu"
          onClick={this.onToggleMenu}
        />
        <span>🎑El Huertito🎑</span>
      </header>
    );
  }
}

export default Header;
