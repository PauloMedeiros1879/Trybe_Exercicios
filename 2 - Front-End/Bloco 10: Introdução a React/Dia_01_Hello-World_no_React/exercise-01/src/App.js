import React from 'react';
    import './App.css';

    const Task = (value) => {
      return (
        <li key={value}>{value}</li>
      );
    }

const tasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir estudar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map(tasks => Task(tasks)) }</ul>
    );
  }
}
export default App;