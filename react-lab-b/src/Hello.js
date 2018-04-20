import React from 'react';

export default class Hello extends React.Component {
    render() {
        return (
            <div className="Hello-main">
                <h2>Welcome, {this.props.name}</h2>
            </div>
        )
    }
}