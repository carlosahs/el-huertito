import React from 'react';

import './App.css';

import Dashboard from "./Dashboard";
import Header from "./Header";
import Menu from "./Menu";

class App extends React.Component {
  state = {
    toggleMenu: false,
  };

  onToggleMenu = (evt) => {
    evt.preventDefault();

    this.setState({ toggleMenu: !this.state.toggleMenu });
  };

  render() {
    return (
      <main className="App">
        <Header onToggleMenu={this.onToggleMenu} />

        <div className="App-main">
          {
            !this.state.toggleMenu ? null : <Menu toggleStatus={this.state.toggleMenu} />
          }
          <Dashboard />
        </div>
      </main>
    );
  }
}

export default App;
