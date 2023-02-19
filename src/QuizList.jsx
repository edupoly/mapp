import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getCategories } from "./store/actions"

function QuizList(props) {
  useEffect(()=>{
    props.loadCategoriesList()
  },[])
  return (
    <div>
      <h1>QuizList</h1>
      <ol className="d-flex flex-wrap">{Object.keys(props.categories).map((c)=>{
        return <li className="w-25">
          <h4>{c}</h4>
          <ul className="">
            {
              props.categories[c].map((s)=>{
                return <li><Link to={`/quiz/${s}`}>{s}</Link></li>
              })
            }
          </ul>
          {JSON.stringify()}
        </li>
      })}</ol>
    </div>
  )
}
export default connect((state)=>{return state.quiz},(dispatch)=>{
  return {
    loadCategoriesList:()=>{dispatch(getCategories())}
  }
})(QuizList)