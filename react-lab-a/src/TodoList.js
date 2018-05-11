import React, { Component } from 'react';
import TodoInput from './TodoInput';
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

    addTodo = (text) => {
        this.setState((prevState) => ({todos: [
            ...prevState.todos, 
            {
                title: text,
                status: 'active'
            }] 
        }))
    }

    render() {
        return ([
            <h2 key="heading">Things TODO:</h2>,
            <TodoInput key="input" onNewTodo={this.addTodo} />,
            <ul key="list" className="TodoList-list">
            {
                this.state.todos.map(
                    todo => (<li  key={todo.title}>{todo.title} - {todo.status}</li>)
                )
            }
            </ul>
        ]);
    }
}