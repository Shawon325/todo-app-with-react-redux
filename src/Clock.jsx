import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Shawon',
    };

    console.log('constructor', this.state);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', state);

    return {
      name: props.name,
    };
  }

  componentDidMount() {
    console.log(this.state);
    console.log('componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  handleChange() {
    this.setState({ name: 'Shakil' });
  }

  render() {
    console.log('render');

    return (
      <>
        <h1>Hello Shawon</h1>
        <p>{this.state.name}</p>
        <button onClick={() => this.handleChange()}>Change</button>
      </>
    );
  }
}
