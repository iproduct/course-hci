import React, { Component } from 'react';
import './TodoList.css';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {title: 'Create React application', status: 'active'},
                {title: 'Make TodoList  component', status: 'active'},
                {title: 'Make TodoItem  component', status: 'active'},
                {title: 'Make TodoInput  component', status: 'active'},
                {title: 'Build Todo application', status: 'active'},
                {title: 'Run Todo application', status: 'active'},
            ]
        }
    }

    render() {
        return ([
            <h2>Things TODO:</h2>,
            <ul className="TodoList-list">
            {
                this.state.todos.map(
                    todo => (<li>{todo.title} - {todo.status}</li>)
                )
            }
            </ul>
        ]);
    }
}