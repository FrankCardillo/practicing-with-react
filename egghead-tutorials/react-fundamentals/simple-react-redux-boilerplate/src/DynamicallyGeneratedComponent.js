import React from 'react';
import ReactDOM from 'react-dom';

class DynamicallyGeneratedComponent extends React.Component {
  constructor() {
    super();
    this.state = {data: [
      {id: 1, name: "Simon Bailey"},
      {id: 2, name: "Joe Schmoe"},
      {id: 3, name: "Hello David"}
    ]}
  }

  render() {
    let rows = this.state.data.map( person => {
      return <PersonRow key={person.id} data={person} />
    })
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  );
}

ReactDOM.render(
  <DynamicallyGeneratedComponent />,
  document.getElementById('app')
);

export default DynamicallyGeneratedComponent;
