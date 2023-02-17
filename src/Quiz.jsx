import { useEffect,useState } from "react"
import { connect } from "react-redux"
import { getQuestions } from "./store/actions"

function Quiz(props) {
  console.log("Quiz component",props)
  useEffect(()=>{
    props.loadQuiz()
  },[])
  useEffect(()=>{
    setQuiz([...props.questions])
  },[props.questions.length])
  const [quiz, setQuiz] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  function handleAnswer(selectedAnswer,id){
    var temp =quiz.map((q)=>{
      console.log(q,selectedAnswer,id)
      if(id===q.id){
        return {...q,selectedAnswer}
      }
      else{
        return {...q}
      }
    })
    setQuiz([...temp])
  }
  useEffect(()=>{console.log("quiz",quiz)},[quiz])
  useEffect(()=>{console.log("quiz",quiz)},[isSubmitted])
  return (
    <div className='border border-2 p-2 border-secondary m-2'>
      <h1>Quiz</h1>
      <ul>
        {
          !isSubmitted && props.questions && props.questions.map((q)=>{
            return <li>

              {q.question}
              <div>
                {
                  q.options.map((a)=>{
                    return <div>
                      <input type="radio" name={q.id} value={a} onChange={(e)=>{handleAnswer(e.target.value,q.id)}}/>:{a}
                    </div>
                  })
                }
              </div>
            </li>
          })
        }


        {
          isSubmitted && quiz && quiz.map((q)=>{
            return <li className={q.selectedAnswer==q.correctAnswer?'bg-success':'bg-danger'}>
              <div>
                {
                  q.options.map((a)=>{
                    return <div>
                      <i className="bi bi-1-circle-fill"></i>
                      <input type="radio" checked={q.selectedAnswer===a}/>:{a}
                    </div>
                  })
                }
              </div>
            </li>
          })
        }
      </ul>
      <button onClick={()=>{setIsSubmitted(true)}}>Submit</button>
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