import React from 'react';

import './App.css';

import ActivePane from "./ActivePane";
import Header from "./Header";
import Menu from "./Menu";

class App extends React.Component {
  state = {
    toggleMenu: false,
  };

  onToggleMenu = (evt) => {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  };

  render() {
    return (
      <main>
        <Header onToggleMenu={this.onToggleMenu} />

        <div>
          <Menu toggleStatus={this.state.toggleMenu} />
          <ActivePane pane={0} />
        </div>
      </main>
    );
  }
}

export default App;
