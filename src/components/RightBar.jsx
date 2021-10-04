import React from "react";
import Education from "./Education";
import Experience from "./Experience";

export default class RightBar extends React.Component {
  state = {
    education: [
      {
        title: "Primary & High School",
        date: "Jan 2010 - Jan 2016",
        description: "PSC & JSC cirtificate",
      },
      {
        title: "Internet And Google (for learnig Developement)",
        date: "Jan 2010 - Jan 2016",
        description:
          "I have learned everything from free recource which avilale in internet. I have no mentor without google. ",
      },
    ],
    experience: [
      {
        title: "Full-Stack Web Developer",
        date: "Jan 2020",
        current: true,
        description:
          "Currently I am Working as full stack developming using MERN Stack",
      },
      {
        title: "Freelance Frontend developer / upwork.com",
        date: "Jan 2019 - Jan 2020",
        description:
          "I have worked as a freelance Front End developer at upwork.com",
      },
      {
        title: "Degital Marketing and Graphic Design",
        date: "Jan 2019 - Jan 2020",
        description:
          "I have little experience in degetial maketing and grphic design. I have created some graphics and degital marketing campain for a small company",
      },
    ],
  };
  render() {
    return (
      <div class="w3-twothird">
        <Experience allInfo={this.state.experience} />
        <Education allInfo={this.state.education} />
      </div>
    );
  }
}
