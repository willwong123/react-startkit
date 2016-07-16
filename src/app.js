import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            time: Date.now(),
        };
    }

    render() {
        return (
            <div>
                <h1>DEMO</h1>
                <p>via: {this.state.time}</p>
            </div>
        );
    }
}

render(<App />, document.querySelector('#demo'));
