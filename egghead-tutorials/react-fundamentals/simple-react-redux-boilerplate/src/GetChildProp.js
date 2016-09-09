import React from 'react';
import ReactDOM from 'react-dom';

class GetChildProp extends React.Component {
  render() {
    return <Button>I <Heart /> React</Button>
  }
}

class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>
  }
}

const Heart = () => <span>{'<3'}</span>

ReactDOM.render(
  <GetChildProp />,
  document.getElementById('app')
);

export default GetChildProp;
