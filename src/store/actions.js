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
      var temp = res.data.map((question)=>{
        var options = [...question.incorrectAnswers,question.correctAnswer];
        options.sort(() => Math.random() - 0.5);
        return {...question,options:[...options],selectedAnswer:''}
      })
      dispatch({type:"LOADQUESTIONS",payload:temp})
    })
  }
}