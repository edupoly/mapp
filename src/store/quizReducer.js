const initialState={
  questions:[],
  categories:[]
}
function quizReducer(state=initialState,action){
  if(action.type==='LOADQUESTIONS'){
    return {...state,questions:action.payload}
  }
  if(action.type==='LOADCATEGORIES'){
    return {...state,categories:action.payload}
  }
  return {...state}
}
export default quizReducer;