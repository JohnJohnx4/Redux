import React, { Component } from 'react';
import '../styles/App.css';
import TodoList from './todoList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>This is the Todo App</h1>
      <TodoList />
      </div>
    );
  }
}

export default App;
