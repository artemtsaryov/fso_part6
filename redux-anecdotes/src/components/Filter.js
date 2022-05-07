import { connect } from 'react-redux'
import { filter } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    props.filter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value={props.query} onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    query: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filter: value => dispatch(filter(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)