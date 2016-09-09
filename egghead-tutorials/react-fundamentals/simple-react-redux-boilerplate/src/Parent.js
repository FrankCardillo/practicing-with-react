import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child';

class Parent extends React.Component {
  constructor() {
    super();
    this.state = { txt: '' };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({ txt: e.target.value })
  }
  render() {
    return (
      <div>
        <Child txt={this.state.txt} update={this.update} />
        <Child txt={this.state.txt} update={this.update} />
        <Child txt={this.state.txt} update={this.update} />
      </div>
    );
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);

export default Parent;
