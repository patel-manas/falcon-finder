import React, { Component } from "react";
import "./index.css";

import bgImg from "../../assets/galaxy.jpg";
import falconAPI from "../../rest/falconAPI";
import p6 from "../../assets/6.svg";
import p1 from "../../assets/1.svg";
import p2 from "../../assets/2.svg";
import p3 from "../../assets/3.svg";
import p4 from "../../assets/4.svg";
import p5 from "../../assets/5.svg";
import v1 from "../../assets/v1.svg";
// import v2 from "../../assets/v2.svg";
import v4 from "../../assets/nature.png";

const _images = { p1, p2, p3, p4, p5, p6, v1, v4 };

class FalconFinder extends Component {
  state = {
    planets: [],
    selectedPlanets: [],
    addingPlanet: false,
    availablePlanets: [],
    veichels: []
  };
  componentDidMount() {
    console.log("_images", _images);
    falconAPI.fetchPlanets().then(planets => {
      console.log("planets", planets);
      this.setState({ planets: planets.data });
      console.log("state", this.state);
    });
  }
  addPlanet = () => {
    this.setState({ addingPlanet: true });
  };
  onPlanetSelect = e => {
    const selectedPlanets = [...this.state.selectedPlanets];
    selectedPlanets.push(e.target.value);
    this.setState({ selectedPlanets });
  };
  render() {
    return (
      <div className="ff_home" style={{ backgroundImage: `url(${bgImg})` }}>
        {/* <img src={bgImg} alt="galaxy" /> */}
        {/* <div className="ff_planet_card add">
          <button onClick={this.addPlanet}>Add</button>
        </div>
        <section className="ff_planets">
          {this.state.addingPlanet
            ? this.state.planets.map((planet, idx) => {
                return (
                  <div className="ff_planet_card" key={idx}>
                    <img src={v4} alt={planet.name} />
                    {planet.name}
                  </div>
                );
              })
            : null}
        </section> */}
        <section class="sel_1">
          <select onChange={this.onPlanetSelect}>
            {this.state.planets
              .filter(p => !this.state.selectedPlanets.includes(p.name))
              .map(planet => (
                <option value={planet.name}>{planet.name}</option>
              ))}
          </select>
        </section>
        <section class="sel_2">
          <select onChange={this.onPlanetSelect}>
            {this.state.planets
              .filter(p => !this.state.selectedPlanets.includes(p.name))
              .map(planet => (
                <option value={planet.name}>{planet.name}</option>
              ))}
          </select>
        </section>
        <section class="sel_3">
          <select onChange={this.onPlanetSelect}>
            {this.state.planets
              .filter(p => !this.state.selectedPlanets.includes(p.name))
              .map(planet => (
                <option value={planet.name}>{planet.name}</option>
              ))}
          </select>
        </section>
        <section class="sel_4">
          <select onChange={this.onPlanetSelect}>
            {this.state.planets
              .filter(p => !this.state.selectedPlanets.includes(p.name))
              .map(planet => (
                <option value={planet.name}>{planet.name}</option>
              ))}
          </select>
        </section>
      </div>
    );
  }
}

export default FalconFinder;
