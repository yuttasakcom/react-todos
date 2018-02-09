import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import TodoInput from './TodoInput/TodoInput'

const Todos = ({ todos, showDone, toggleTodoDone }) => (
  <div>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}{' '}
          <input
            type="checkbox"
            onChange={() => toggleTodoDone(todo)}
            checked={todo.done}
          />
        </li>
      ))}
    </ul>
    <TodoInput />
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleTodoDone(todo) {
    const updated = { ...todo, done: !todo.done }
    dispatch({ type: 'UPDATE_TODO', todo: updated })
  }
})

const mapStateToProps = ({ todos, showDone }) => ({ todos, showDone })

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
