import React, { Component } from "react";
import { AppContainer } from "../components/AppContainer";
import Course from "../components/Course";
import Navigation from "../components/Navigation";
const courses = [
  {
    id: 1,
    name: "First course",
    description: "cource description",
    duration: "185",
    data: "12.12.2018"
  },
  {
    id: 2,
    name: "Second cource",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tincidunt consequat. Nam diam sapien, porttitor quis facilisis quis, semper pharetra elit. Quisque vel dolor odio. Nulla tempus felis tincidunt mi dignissim tempus. Aenean a lacus non ipsum pretium varius at in magna. Mauris in ante id lorem ullamcorper ultrices. Nunc non libero quis orci feugiat tincidunt. Curabitur turpis odio, imperdiet ut aliquam a, bibendum non lacus.",
    duration: "60",
    data: "20.12.2018"
  }
];

export default class CoursesPage extends Component {
  renderCourses = () => {
    return courses.map(i => <Course key={i.id} course={i} />);
  };

  handleClick = id => {
    console.log(id);
  };
  render() {
    return (
      <AppContainer>
        <Navigation />
        {this.renderCourses()}
      </AppContainer>
    );
  }
}
