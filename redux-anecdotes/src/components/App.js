import AnecdoteForm from './AnecdoteForm'
import AnecdoteList from './AnecdoteList'
import Notification from './Notification'
import Filter from './Filter'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App