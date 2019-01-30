import React, { Component } from 'react';

export default class Todo extends Component {
    render() {
        return (
            <div>
                <li className="collection-item">
                    {this.props.text}
                </li>
            </div>
        )
    }
}