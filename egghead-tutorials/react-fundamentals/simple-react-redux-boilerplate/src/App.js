import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello World
        </h1>
        <b>Bold</b>
      </div>
    ); //React.createElement('h1', null, 'Hello World')
  }
}

// const App = () => <h1>Hello Eggheads</h1>

export default App;
