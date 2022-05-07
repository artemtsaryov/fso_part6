import { connect } from 'react-redux'
import { newAnecdoteAction } from '../reducers/anecdoteReducer'
import { notifyWithTimeout } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const newAnecdote = async (event) => {
    event.preventDefault()

    props.newAnecdoteAction(event.target.anecdote.value)
    props.notifyWithTimeout(`you created '${event.target.anecdote.value}'`, 5)

  }

  return (
    <div>
      <form onSubmit={newAnecdote }>
        <div><input name='anecdote' /></div>
        <button type='submit' >create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  newAnecdoteAction,
  notifyWithTimeout
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)