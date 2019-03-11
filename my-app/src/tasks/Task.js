import React, { Component } from "react";

class Task extends Component {

constructor(props) {
    super(props)
}

  render() {
    return (
      <div className="Task">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Task;
