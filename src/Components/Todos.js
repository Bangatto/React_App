import React, { Component } from 'react';
import TodoItems from "./TodoItems";
import propTypes from 'prop-types';

class Todos extends Component {
    
  render() {
    return this.props.todos.map((todo) => (
        <TodoItems key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));  
  }
}
// PropTypes
Todos.propTypes = {
    todos: propTypes.array.isRequired
}
export default Todos;

