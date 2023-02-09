import {connect} from 'react-redux'
function Counter(props) {
  console.log(props)
  return (
    <div className="border border-2 border-danger p-2">
      <h1>Counter:{props.count}</h1>
    </div>
  )
}
export default connect(function(store){return store})(Counter)