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
      var questions = res.data.map((q)=>{
        var options = [...q.incorrectAnswers,q.correctAnswer]
        console.log(options)
        options.sort(()=>Math.random()-0.5)
        console.log(options)
        return {...q,options:[...options],selectedAnswer:""}
      })
      dispatch({type:"LOADQUESTIONS",payload:[...questions]})
    })
  }
  
}