import axios from "axios"

export function addTodoItem(newtodo)
{
  return {type:'ADDTODO',payload:newtodo}
}
export function incrementCount(){
  return {type:'INC'}
}
export function getQuestions(categories="history"){
  // https://the-trivia-api.com/api/questions?limit=20&categories=science,history
  return (dispatch)=>{
    axios.get(`https://the-trivia-api.com/api/questions/?limit=20&categories=${categories}`).then((res)=>{
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
export function getCategories(){
  return (dispatch)=>{
    axios.get("https://the-trivia-api.com/api/categories/").then((res)=>{
      console.log("inside getCategories action",res.data)
      dispatch({type:"LOADCATEGORIES",payload:res.data})
    })
  }
}