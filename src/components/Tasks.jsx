import React from 'react'
import { useDispatch } from 'react-redux'
import { handleComplete, handleDelete } from '../redux/action'
import EditTask from './EditTask'

const Tasks = ({el}) => {
 const dispatch= useDispatch()
  return (
    <div>
      <h3 className={el.isDone?"Done":""}>{el.action}</h3>
      <button onClick={()=>dispatch(handleDelete(el.id))} >delete</button>
      <button onClick={()=>dispatch(handleComplete(el.id))}>complete</button>
      <EditTask tache={el}/>
    </div>
  )
}

export default Tasks