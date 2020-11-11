import React from 'react';
import './classes/Plant';

class Dashboard extends React.Component {
  state = {
    plants: {
      carrots: {
        humidity: 0,
        temperature: 0,
      },
      tomatoes: {
        humidity: 0,
        temperature: 0,
      },
      ["blue berries"]: {
        humidity: 0,
        temperature: 0,
      },
    }
  };

  onFormSubmit = (evt) => {
    evt.preventDefault();
  };

  addPlant = (plant_name) => {
    const new_plant = {
      [plant_name]: {
        humidity: 0,
        temperature: 0,
      }
    };

    const updated_plants = Object.assign(
      this.state.plants, 
      new_plant
    );

    this.setState({ plants: updated_plants });
  };

  render() {
    return (
      <main className="App-dashboard">
        <h1>My dashboard</h1>

        <div className="App-dashboard-plants">
          <form onSubmit={this.onFormSubmit}>
            <label for="plants_">Choose a plant: </label>

            <select name="plants" id="plants_">
              <option value="carrot">Carrot</option>
              <option value="tomato">Tomato</option>
              <option value="blue-berry">Blue berry</option>
            </select>

            <input type="submit" value="Get Stats" />
          </form>

          <div className="App-dashboard-stats">
            <table>
              <thead>
                <tr>
                  <th>Humidity</th>
                  <th>Temperature</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{this.state.humidity}</td>
                  <td>{this.state.temperature}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;
