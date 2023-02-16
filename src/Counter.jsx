import {connect} from 'react-redux'
import { incrementCount } from './store/actions'
function Counter(props) {
  console.log(props)
  return (
    <div className="border border-2 border-danger p-2">
      <h1>Counter:{props.count}</h1>
      <button onClick={()=>{props.inc()}}>Increment</button>
      <button onClick={()=>{props.dec()}}>Decrement</button>
      <button onClick={()=>{props.reset()}}>RESET</button>
    </div>
  )
}
export default connect(
  function(state){return state.counter},
  function(dispatch){return {
    inc:()=>{dispatch(incrementCount())},
    dec:()=>{dispatch({type:'DEC'})},
    reset:()=>{dispatch({type:'RESET'})},
  }}
)(Counter)