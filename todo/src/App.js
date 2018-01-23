import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todos';
import AddTodo from './components/addTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>This is the main app</h1>
        <TodoList />

      </div>
    );
  }
}

export default App;
