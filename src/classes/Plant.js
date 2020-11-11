class Plant {
  constructor(name, temperature, humidity) {
    this.name = name;
    this.temperature = temperature;
    this.humidity = humidity;
  }

  get name() {
    return this.name;
  }

  get temperature() {
    return this.temperature;
  }

  get humidity() {
    return this.humidity;
  }
}

export default Plant;
