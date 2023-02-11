import {connect} from 'react-redux'
function Counter(props) {
  console.log(props)
  return (
    <div className="border border-2 border-danger p-2">
      <h1>Counter:{props.counter.count}</h1>
      <button onClick={()=>{props.dispatch({type:'INC'})}}>Increment</button>
      <button onClick={()=>{props.dispatch({type:'DEC'})}}>Decrement</button>
      <button onClick={()=>{props.dispatch({type:'RESET'})}}>RESET</button>
    </div>
  )
}
export default connect(function(store){return store})(Counter)