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
const reducers = (state = defaultState, action) => state

export default () => createStore(reducers)
