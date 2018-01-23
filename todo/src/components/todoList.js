import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../actions';
import './todoList.css';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }

    }

    componentDidMount = () => {
        document.getElementById('todoSubmit').addEventListener('keypress', function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();                
            }
        });      
    }

    deleteTodoHandler = todoId => {
        this.props.deleteTodo(todoId);
    }

    handleToggleTodo = todoId => {
        this.props.toggleTodo(todoId);
    }
    
    handleTodoInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addTodoHandler = e => {
        e.preventDefault();
        const { text } = this.state;
        const newTodo = {
            text,
            completed: false,
            id: this.props.todos ? this.props.todos.length + text : text
        };
        this.props.addTodo(newTodo);
        this.setState({
            text: ''
        });
    };

    render() {
        const { todos } = this.props;
        return( 
            <div>
                <div className="todo__list">
                    This is the TodoList!
                </div>
                <form>
                    <input
                        id="todoSubmit"
                        onChange={this.handleTodoInput}
                        name="text"
                        value={this.state.text}
                    />
                    
                    <button type="button" onClick={this.addTodoHandler}>
                        Add Todo
                    </button>
                </form>
                <ul>
                    {todos.map(todo => {
                        return (
                            <li 
                                className="todo__li"
                                style={ 
                                    todo.completed 
                                    ? {color: '#d3d3d3', textDecoration: 'line-through'} 
                                    : null
                                }
                                onClick={() => this.handleToggleTodo(todo.id)} 
                                key={todo.id}
                                >
                                {todo.text}
                                <button
                                    className="todo__li__button"
                                    type="button"
                                    onClick={() => this.deleteTodoHandler(todo.id)}
                                    >
                                    x
                                </button>
                            </li>
                        ); 
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


export default connect(mapStateToProps, {addTodo, toggleTodo, deleteTodo})(TodoList);