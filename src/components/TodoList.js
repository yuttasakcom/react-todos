import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

const TodoList = ({ todos }) => (
  <div>
    <ul>{todos.map(todo => <li key={todo.id}>{todo.text}</li>)}</ul>
  </div>
)

const mapStateToProps = ({ todos, showDone }) => ({ todos, showDone })

export default connect(mapStateToProps)(TodoList)
