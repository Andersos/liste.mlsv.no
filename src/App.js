import React from 'react';
import createClass from 'create-react-class';
import firebase from 'firebase';
import Router from './lib/director';
import TodoFooter from './components/footer';
import TodoItem from './components/todoItem';
import { store, uuid, extend } from './components/utils';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './lib/constants';

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDQb19RJIoBDAAnwLzdUI--IY_hzbxRpcA',
  authDomain: 'morland-sandvik.firebaseapp.com',
  databaseURL: 'https://morland-sandvik.firebaseio.com',
  projectId: 'morland-sandvik',
  storageBucket: 'morland-sandvik.appspot.com',
  messagingSenderId: '502952684315',
});

const ENTER_KEY = 13;
const KEY = 'handleliste';

const TodoApp = createClass({
  getInitialState() {
    return {
      nowShowing: ALL_TODOS,
      editing: null,
      newTodo: '',
      todos: store(KEY),
      onChanges: [],
    };
  },

  componentDidMount() {
    const { setState } = this;
    const router = Router({
      '/': setState.bind(this, { nowShowing: ALL_TODOS }),
      '/active': setState.bind(this, { nowShowing: ACTIVE_TODOS }),
      '/completed': setState.bind(this, { nowShowing: COMPLETED_TODOS }),
    });
    router.init('/');
  },

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  },

  handleNewTodoKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    const val = this.state.newTodo.trim();

    if (val) {
      this.setState({
        newTodo: '',
        todos: this.state.todos.concat({
          id: uuid(),
          title: val,
          completed: false,
        }),
      });
    }
  },

  toggleAll(event) {
    this.setState({
      todos: this.state.todos.map(todo => extend({}, todo, { completed: event.target.checked })),
    });
  },

  toggle(todoToToggle) {
    this.setState({
      todos: this.state.todos.map(todo => (todo !== todoToToggle ? todo : extend({}, todo, { completed: !todo.completed }))),
    });
  },

  destroy(todo) {
    this.setState({ todos: this.state.todos.filter(candidate => candidate !== todo) });
  },

  edit(todo) {
    this.setState({ editing: todo.id });
  },

  save(todoToSave, text) {
    this.setState({
      editing: null,
      todos: this.state.todos.map(todo => (todo !== todoToSave ? todo : extend({}, todo, { title: text }))),
    });
  },

  cancel() {
    this.setState({ editing: null });
  },

  clearCompleted() {
    this.setState({ todos: this.state.todos.filter(todo => !todo.completed) });
  },

  render() {
    store(KEY, this.state.todos);
    let footer;
    let main;
    const { todos } = this.state;

    const shownTodos = todos.filter((todo) => {
      switch (this.state.nowShowing) {
        case ACTIVE_TODOS:
          return !todo.completed;
        case COMPLETED_TODOS:
          return todo.completed;
        default:
          return true;
      }
    }, this);

    const todoItems = shownTodos.map(
      todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={this.toggle.bind(this, todo)}
          onDestroy={this.destroy.bind(this, todo)}
          onEdit={this.edit.bind(this, todo)}
          editing={this.state.editing === todo.id}
          onSave={this.save.bind(this, todo)}
          onCancel={this.cancel}
        />
      ),
      this,
    );

    const activeTodoCount = todos.reduce((accum, todo) => (todo.completed ? accum : accum + 1), 0);

    const completedCount = todos.length - activeTodoCount;

    if (activeTodoCount || completedCount) {
      footer = (
        <TodoFooter
          count={activeTodoCount}
          completedCount={completedCount}
          nowShowing={this.state.nowShowing}
          onClearCompleted={this.clearCompleted}
        />
      );
    }

    if (todos.length) {
      main = (
        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            onChange={this.toggleAll}
            checked={activeTodoCount === 0}
          />
          <ul className="todo-list">{todoItems}</ul>
        </section>
      );
    }

    return (
      <div>
        <header className="header">
          <h1>Handleliste</h1>
          <input
            className="new-todo"
            placeholder="Hva skal vi handle?"
            value={this.state.newTodo}
            onKeyDown={this.handleNewTodoKeyDown}
            onChange={this.handleChange}
            autoFocus
          />
        </header>
        {main}
        {footer}
      </div>
    );
  },
});

export default TodoApp;
