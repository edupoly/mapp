const initialState={
  count:100
}
function CounterReducer(state=initialState,action){
  if(action.type==='INC'){
    return {...state,count:state.count+1}
  }
  if(action.type==='DEC'){
    return {...state,count:state.count-1}
  }
  if(action.type==='RESET'){
    return {...state,count:initialState.count}
  }
  return state
}
export default CounterReducer