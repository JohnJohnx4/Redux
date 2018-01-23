import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }
        
    handleTodoInput = e => {
        
    }

    render() {
        return(
            <div className="todo__list">
            This is the TodoList!
            </div>
        );
    }

    const mapStateToProps = state => {
        return{
            todos
        }
    }
}


export default connect(mapStateToProps, {addTodo})(TodoList);