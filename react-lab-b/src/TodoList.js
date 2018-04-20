import React, {Component} from 'react';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {title: 'Create new React project', status: 'completed'},
                {title: 'Create TodoList component', status: 'active'},
                {title: 'Create TodoItem component', status: 'active'},
                {title: 'Create TodoInput component', status: 'active'},
                {title: 'Build react application', status: 'active'},
                {title: 'Run TODO application with webpack-dev-server', status: 'active'},
            ]
        }
    }

    render() {
        return (
            <h2>Things TODO:</h2>
        );
    }
}