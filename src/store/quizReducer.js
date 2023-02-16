const initialState={
  questions:[]
}
function quizReducer(state=initialState,action){
  if(action.type==='LOADQUESTIONS'){
    return {...state,questions:action.payload}
  }
  return {...state}
}
export default quizReducer;