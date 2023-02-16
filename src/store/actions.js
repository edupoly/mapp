import axios from "axios"

export function addTodoItem(newtodo)
{
  return {type:'ADDTODO',payload:newtodo}
}
export function incrementCount(){
  return {type:'INC'}
}
export function getQuestions(){
  return (dispatch)=>{
    axios.get("https://the-trivia-api.com/api/questions/").then((res)=>{
      console.log("inside getQuestions action",res.data)
      dispatch({type:"LOADQUESTIONS",payload:res.data})
    })
  }
  
}