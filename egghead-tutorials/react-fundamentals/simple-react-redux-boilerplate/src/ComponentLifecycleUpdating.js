import React from 'react';
import ReactDOM from 'react-dom';

class ComponentLifecycleUpdating extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {increasing: false};
  }
  update() {
    ReactDOM.render(
      <ComponentLifecycleUpdating val={this.props.val+1} />,
      document.getElementById('app')
    );
  }
  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  render() {
    console.log(this.state.increasing);
    return (
      <button onClick={this.update}>
        {this.props.val}
        </button>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
  }
}

ComponentLifecycleUpdating.defaultProps = { val: 0 }

ReactDOM.render(
  <ComponentLifecycleUpdating />,
  document.getElementById('app')
);

export default ComponentLifecycleUpdating;
