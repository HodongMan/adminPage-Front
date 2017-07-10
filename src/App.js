import React, { Component } from 'react';
import {Nav, Main, List, Form} from './components';


class App extends Component {
  render() {
    return (
        <div id = 'wrapper'>
            <Nav />
            <Form />
        </div>
    );
  }
}

export default App;
