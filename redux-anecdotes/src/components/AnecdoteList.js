import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdoteAction, initAnecdotesAction } from '../reducers/anecdoteReducer'
import { notifyWithTimeout } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => { 
    return state
      .anecdotes
      .filter(a => a.content.toLowerCase().indexOf(state.filter) !== -1)
      .sort((a, b) => b.votes - a.votes)
    })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initAnecdotesAction())
  }, [dispatch])

  const vote = (anecdote) => {
    dispatch(voteAnecdoteAction(anecdote))
    dispatch(notifyWithTimeout(`you voted for '${anecdote.content}'`, 5))
  }

  return (
    <div>
      {anecdotes
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
      )}
    </div>
  )
}

export default AnecdoteList