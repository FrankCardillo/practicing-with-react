import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    let txt = this.props.txt;
    return (
      <div>
        <h1>
          {txt}
        </h1>
        <b>Bold</b>
      </div>
    ); //React.createElement('h1', null, 'Hello World')
  }

}
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default txt'
}

// const App = () => <h1>Hello Eggheads</h1>

ReactDOM.render(
  <App cat={5} /*txt="this is the props text"*//>,
  document.getElementById('app')
);

export default App;
