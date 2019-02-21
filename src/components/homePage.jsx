import React, { Component } from "react";
import GetData from "./getData";
class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <a href="">
          <img src="./logo-black.png" alt="logo" />
        </a>
        <h2>About TIFF</h2>
        <p>
          TIFF is a charitable cultural organization with a mission to transform
          the way people see the world through film. TIFF is dedicated to
          presenting the best of international and Canadian cinema and creating
          transformational experiences for film lovers and creators of all ages
          and backgrounds. As Canada's premiere home of cinema, TIFF offers
          screenings, lectures, discussions, festivals, workshops, events,
          professional development and opportunities to meet, hear and learn
          from filmmakers from Canada and around the world.
        </p>
        <GetData />
      </div>
    );
  }
}
export default HomePage;
