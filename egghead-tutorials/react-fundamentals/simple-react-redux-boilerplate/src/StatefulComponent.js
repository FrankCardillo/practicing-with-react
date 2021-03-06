import React from 'react';
import ReactDOM from 'react-dom';

class StatefulComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    };
  }
  update(e) {
    this.setState({ txt: e.target.value })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <StatefulComponent />,
  document.getElementById('app')
);


export default StatefulComponent
