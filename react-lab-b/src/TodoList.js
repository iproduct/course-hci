import React, {Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, title: 'Create new React project', status: 'completed'},
                {id: 2, title: 'Create TodoList component', status: 'active'},
                {id: 3, title: 'Create TodoItem component', status: 'active'},
                {id: 4, title: 'Create TodoInput component', status: 'active'},
                {id: 5, title: 'Build react application', status: 'active'},
                {id: 6, title: 'Run TODO application with webpack-dev-server', status: 'active'},
            ]
        }
    }

    render() {
        return ([
            <h2 key='h2-main'>Things TODO:</h2>,
            <ul key='ul-main'className='TodoList-list'>
            {
                this.state.todos.map(todo =>(
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
            </ul>
        ]);
    }
}