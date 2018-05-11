import React, { Component } from 'react';

export default class TodoInput extends Component {
    state = {
        text: ''
    };

    constructor(props){
        super(props);
        this.changeText = this.changeText.bind(this);
    }

    changeText(event) {
        this.setState({ text: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const text = this.state.text.trim();
        if(text.length > 0) {
            this.props.onNewTodo(text);
            this.setState({ text: '' });
        }
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input type="text" value={this.state.text} onChange={this.changeText} />
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}
