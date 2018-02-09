import { createStore } from 'redux'
import guid from 'guid'

const todos = [
  {
    id: guid.raw(),
    text: 'Collect wood',
    done: false
  },
  {
    id: guid.raw(),
    text: 'Invent the pickaxe',
    done: true
  },
  {
    id: guid.raw(),
    text: 'Explore cave',
    done: false
  }
]

const defaultState = {
  todos,
  showdone: true
}
const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'SUBMIT_TODO':
      return { ...state, todos: [...state.todos, action.todo] }
      break

    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(
          _todo => (_todo.id === action.todo.id ? action.todo : _todo)
        )
      }
      break
    default:
      return state
      break
  }
}

export default () => createStore(reducers)
