import { useEffect } from "react"
import { connect } from "react-redux"
import { getQuestions } from "./store/actions"

function Quiz(props) {
  console.log("Quiz component",props)
  useEffect(()=>{
    props.loadQuiz()
  },[])
  return (
    <div className='border border-2 p-2 border-secondary m-2'>
      <h1>Quiz</h1>
      <ul>
        {
          props.questions && props.questions.map((q)=>{
            return <li>
              {q.question}
              <div>
                {
                  q.incorrectAnswers.map((a)=>{
                    return <div>
                      <input type="radio" />:{a}
                    </div>
                  })
                }
              </div>
            </li>
          })
        }
      </ul>
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