import React from 'react';
import ReactDOM from 'react-dom';

class ComposableComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0
     };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
    })
  }
  render() {
    return (
      <div>
        <RefChild ref="red"
        min={0}
        max={255}
        step={1}
        val={this.state.red}
        type="number"
        label="Red"
        update={this.update} />
      </div>
    );
  }
}

class RefChild extends React.Component {
  render() {
    let label = this.props.label !== '' ?
    <label>{this.props.label} - {this.props.val}</label> : ''
    return (
      <div>
        <input ref="inp"
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update} />
          {label}
      </div>
    );
  }
}

RefChild.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

RefChild.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}

ReactDOM.render(
  <ComposableComponent />,
  document.getElementById('app')
);
