import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
class App extends Component {
  render() {
    const { dispatch, eklenmisTodos } = this.props;
    return (
      <div className="App">
        <AddTodo onAddClick={text => dispatch(addTodo(text))} />
        <TodoList todos={eklenmisTodos} />
      </div>
    );
  }
}

function select(state) {
  return {
    eklenmisTodos: state.todos
  }
}
export default connect(select)(App);
