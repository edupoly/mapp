import { useState,useEffect } from "react"
import { connect } from "react-redux"
import { getQuestions } from "./store/actions"

function Quiz(props) {
  console.log("Quiz component",props)
  useEffect(()=>{
    props.loadQuiz()
  },[])
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
  function submitQuiz(){
    var score=0;
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
      <h1>Score:{result.scored}/{result.outof}</h1>
      <ul>
        {
          questions && questions.map((q,i)=>{
            return <li>
              {q.question}
              <div>
                {
                  q.options.map((a)=>{
                    return <div>
                      <input type="radio" name={q.id} onChange={()=>{markAnswer(a,i)}}/>:{a}
                    </div>
                  })
                }
              </div>
            </li>
          })
        }
      </ul>
      <button onClick={submitQuiz}>Submit</button>
    </div>
  )
}
export default connect(
  function(store){return store.quiz},
  function(dispatch){
    return {
      loadQuiz:()=>{dispatch(getQuestions())}
    }
  })
(Quiz)