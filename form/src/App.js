import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container MyComponent">
        <div className="jumbotron">
          <h1>Hello there!</h1>
          <button type="button" className="btn btn-primary">
            Bootstrap Button!
          </button>
        </div>
      </div>
    );
  }
}

export default App;
