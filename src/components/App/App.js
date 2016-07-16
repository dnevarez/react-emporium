import React from 'react';

import "./App.css";

import NavBar from '../NavBar/NavBar';

const App = React.createClass({
  render() {
    return (
      <div>
        <NavBar />
        { this.props.children }
      </div>
    )
  }
})

export default App;
