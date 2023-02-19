import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import Quiz from "./Quiz"
import { getQuestions } from "./store/actions"

function QuizComponent(props) {
  var x = useParams();
  console.log("x::",x)
  console.log(props)
  useEffect(()=>{
    props.loadQuiz(x)
  },[])
  return (
    <div>
      <Quiz questions={props.questions}></Quiz>
    </div>
  )
}
export default connect(
  function(store){return store.quiz},
  function(dispatch){
    return {
      loadQuiz:(x)=>{dispatch(getQuestions(x.c))}
    }
  })(QuizComponent)
