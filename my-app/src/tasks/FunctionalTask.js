import React, { useState } from "react";

function Task(props) {
    let [accepted, setAccepted] = useState(false);
    function handleAcceptTask() {
        setAccepted(!accepted);
    }
    return(
        <div className={`Task Task-Accepted__${accepted}`}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>

        {accepted && <p>This task has been accepted</p>}
        <button onClick={ () => setAccepted(!accepted)}>Accept Task</button>

      </div>
    )
}

export default Task;

// class Task extends Component {

//     constructor() {
//         super();
//         this.state = {
//             accepted: false,
//         };
//     }

//     handleAcceptTask = () => {

//         this.setState( {
//             accepted: !this.state.accepted
//         });
//     }

//   render() {
//     return (
//       <div className={`Task Task-Accepted__${this.state.accepted}`}>
//         <h2>{this.props.title}</h2>
//         <p>{this.props.description}</p>

//         {this.state.accepted && <p>This task has been acccccepted</p>}
//         <button onClick={this.handleAcceptTask}>Accept Task</button>

//       </div>
//     );
//   }
