import React from 'react';
import ReactDOM from 'react-dom';

class MountingUsage extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({val: this.state.val + 1})
  }
  componentWillMount() {
    this.setState({m: 2});
  }
  render() {
    console.log('rendering!');
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }
  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update,500);
  }
  componentWillUnmount() {
    clearInterval(this.inc);
  }
}

ReactDOM.render(
  <MountingUsage />,
  document.getElementById('app')
);

export default MountingUsage;
