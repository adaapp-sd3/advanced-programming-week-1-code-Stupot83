import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
import AddTask from './components/AddTask';

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
      <Router>
      <div className="App">
      <Header />
      <Route exact path="add-task" component={AddTask} />
      <Route exact path="/" compnent={ () => {} } />
 <section>
   dummyTaskData
      </section>
      </div>
      </Router>
    );
  }
}

export default App;
