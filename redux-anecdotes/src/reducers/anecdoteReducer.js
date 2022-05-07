import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_ANECDOTES':
      return action.data
    case 'ADD_ANECDOTE':
      return state.concat(action.data)
    case 'UPDATE_ANECDOTE': {
      const updatedAnecdote = action.data
      return state.map(anecdote =>
        anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote 
      )
    }
    default:
      return state
  }
}

export const updateAnecdoteAction = (anecdote) => {
  return {
    type: 'UPDATE_ANECDOTE',
    data: anecdote
  }
}

export const setAnecdotesAction = (anecdotes) => {
  return {
    type: 'SET_ANECDOTES',
    data: anecdotes
  }
}

export const addAnecdoteAction = (anecdote) => {
  return {
    type: 'ADD_ANECDOTE',
    data: anecdote
  }
}

export const initAnecdotesAction = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotesAction(anecdotes))
  }
}

export const newAnecdoteAction = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdoteAction(anecdote))
  }
}

export const voteAnecdoteAction = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.vote(anecdote)
    dispatch(updateAnecdoteAction(updatedAnecdote))
  }
}

export default reducer


