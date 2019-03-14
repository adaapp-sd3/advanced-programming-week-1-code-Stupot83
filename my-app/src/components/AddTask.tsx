import React, {Component} from 'react';

class AddTask extends Component {
    render () {
        return (
            <form>
                <label htmlFor="taskName">Task Name:</label>
                <input type='text' name="taskName" placeholder="Add new task" />

                <label htmlFor="description">Task description</label>
                <textarea name="description"></textarea>
                <button>Submit</button>
            </form>
        )
    }
}

export default AddTask;