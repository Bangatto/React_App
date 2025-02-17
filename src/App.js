import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/layout/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import About from './Components/pages/About';
import uuid from 'uuid';


import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Going for a driving class',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Attending PhotoShoot with Maven agency',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Working on my side coding Project',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting Scholarship Office',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting ISMH Board Members',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Hanging out with friends',
        completed: false
      },
    ]
  }
// toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo=> {
      if (todo.id == id) {
        todo.completed = !todo.completed
      }
    return todo;
  }) })
  }

// Delete Todo
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
}

// add todo
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo] });
}

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
