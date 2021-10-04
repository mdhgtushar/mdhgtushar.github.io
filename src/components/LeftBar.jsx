import React from "react";
import About from "./About";
import Languages from "./Languages";
import MyImage from "./MyImage";
import Skills from "./Skills";

export default class LeftBar extends React.Component {
  state = {
    name: "Hobayer Golondaz",
    about: {
      job: "Full Stack WebDeveloper",
      home: "Mymensingh, Bangaldesh.",
      email: "mdhgtushar@gmail.com",
      phone: "+8801302855453",
    },
    skills: [
      {
        key: "Frontend Development",
        value: 70,
      },
      {
        key: "Backend Development",
        value: 60,
      },
      {
        key: "Graphic Design",
        value: 40,
      },
      {
        key: "Media",
        value: 50,
      },
    ],
    languages: [
      {
        key: "Bangla",
        value: "Native",
      },
      {
        key: "English",
        value: "conversitionel",
      },
      {
        key: "Hindi",
        value: "conversitionel",
      },
    ],
  };
  render() {
    return (
      <div class="w3-third">
        <div class="w3-white w3-text-grey w3-card-4">
          <MyImage name={this.state.name} />
          <div class="w3-container">
            <About allInfo={this.state.about} />
            <Skills allInfo={this.state.skills} />
            <Languages allInfo={this.state.languages} />
          </div>
          <hr />
        </div>
        <br />
      </div>
    );
  }
}
