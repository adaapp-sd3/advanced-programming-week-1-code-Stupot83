import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Task from './tasks/Task';

const dummyTaskData = [
  {
    title: "Slow down",
    description: "When leading from the front, you cannot go too slow."
  },
  {
    title: "Provide stretch exercises",
    description: "Ensure all students have meaningful, challenging work to do."
  },
  {
    title: "Provide actual stretch exercises",
    description:
      "It's important whilst coding to stretch and not hunch over the keyboard"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          <Task title="Set new quiz" description="New quiz" />
          <Task title="Mark Coursework" description="Be generous" />
          <Task title="Plan Day 2" description="More fun coding" />
          <Task title="Drink Captain Morgan" description="Chillax with a rum and coke" />
        </section>
      </div>
    );
  }
}

export default App;
