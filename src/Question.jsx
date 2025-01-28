function Question({isSubmitted,q,i,markAnswer}) {
  return (
    <div>
      <li className="">
              {q.question}
              <div>
                {
                  q.options.map((a)=>{
                    return <div className={isSubmitted && q.correctAnswer===a?'border broder-2 border-success':''}>
                      <input type="radio" name={q.id} onChange={()=>{markAnswer(a,i)}}/>:{a}
                      {
                        isSubmitted && q.correctAnswer===a&&(
                          <i class="bi bi-check-circle-fill text-success"></i>
                        )
                      }
                      {
                        isSubmitted && q.correctAnswer!==q.selectedAnswer&&q.selectedAnswer===a&&(
                          <i class="bi bi-emoji-frown-fill"></i>
                        )
                      }
                      {
                        isSubmitted && q.correctAnswer===q.selectedAnswer&&q.selectedAnswer===a&& (
                          <i class="bi bi-emoji-heart-eyes-fill"></i>
                        )
                      }
                    </div>
                  })
                }
              </div>
            </li>
    </div>
  )
}
export default Question