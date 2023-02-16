export function addTodoItem(newtodo)
{
  return {type:'ADDTODO',payload:newtodo}
}
export function incrementCount(){
  return {type:'INC'}
}