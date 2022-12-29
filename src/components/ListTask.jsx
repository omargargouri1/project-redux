import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handeleFiler } from '../redux/action'
import Tasks from './Tasks'

const ListTasks = () => {
  const {tasks,isFiltered}=useSelector(state=>state)
  const dispatch=useDispatch()
    
  return (
    <div>
      <button onClick={()=>dispatch(handeleFiler())}>{isFiltered?'ALL':'UNIFISHID'}</button>,
      {
        isFiltered?
        
        <div>
          {tasks.filter(task=>!task.isDone).map(el=>
            <Tasks key={el.id} el={el}/>)}
        </div>
        

      :<div>
       { tasks.map(el=>
            <Tasks key={el.id} el={el}/>)}
            </div>
        
      }
    </div>
     )
}

export default ListTasks