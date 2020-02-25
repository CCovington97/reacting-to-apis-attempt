import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => console.log(obj));
      }

    render() {
        return (
            <div>
                <h1>Hello There</h1>
            </div>
        )
    }
}

export default App;