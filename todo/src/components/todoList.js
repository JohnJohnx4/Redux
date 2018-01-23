import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }

    handleToggleTodo = todoId => {
        this.props.toggleTodo(todoId)
    }

    handleTodoInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addTodoHandler = e => {
        const { text } = this.state;
        const newTodo = {
            text,
            completed: false,
            id: this.props.todos ? this.props.todos.length : 0
        };
        this.props.addTodo(newTodo);
        this.setState({
            text: ''
        });
    };

    render() {
        return( 
            <div>
                <div className="todo__list">
                    This is the TodoList!
                </div>
                <form>
                    <input
                        onChange={this.handleTodoInput}
                        name="text"
                        value={this.state.text}
                    />
                    <button type="button" onClick={this.addTodoHandler}>
                        Add Todo
                    </button>
                </form>
                <ul>
                    {this.props.todos.map(todo => {
                        return <li onClick={this.handleToggleTodo} key={todo.id}>{todo.text}</li>
                    })}
                </ul>
            </div>
            );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};


export default connect(mapStateToProps, {addTodo})(TodoList);