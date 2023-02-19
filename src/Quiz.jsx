import { useState,useEffect } from "react"
import Question from "./Question"

function Quiz(props) {
  console.log("Quiz component",props)
  
  useEffect(()=>{
    console.log(questions)
    setQuestions([...props.questions])
  },[props.questions])
  const [questions, setQuestions] = useState([])
  function markAnswer(ans,index){
    questions[index].selectedAnswer=ans;
    console.log(questions)
  }
  const [result, setResult] = useState({scored:0,outof:0})
  const [isSubmitted, setIsSubmitted] = useState(false)
  function submitQuiz(){
    var score=0;
    setIsSubmitted(true)
    questions.forEach((q)=>{
      if(q.correctAnswer===q.selectedAnswer){
        score++;
      }
    })
    setResult({scored:score,outof:questions.length})
  }
  return (
    <div className='border border-2 p-2 border-secondary m-2'>
      <h1>Quiz</h1>
      <div className="d-flex flex-wrap">
        
        <ol className="w-75 p-4">
          {
            questions && questions.map((q,i)=>{
              return <Question isSubmitted={isSubmitted} q={q} i={i} markAnswer={markAnswer}></Question>
            })
          }
        </ol>
        <div className="w-25 position-relative">
        <div className="p-4 position-fixed">
          <button onClick={submitQuiz} className='btn btn-info'>Submit Quiz</button>
          <h1>Score:{result.scored}/{result.outof}</h1>
        </div>
        </div>
        
      </div>
    </div>
  )
}
export default Quiz;
