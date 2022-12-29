import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAdd } from '../redux/action'

const AddTask = () => {
    const [text, setText] = useState("")
    const dispatch=useDispatch()
   const handeleSubmit=(e)=>{
       e.preventDefault()
       const newTasks={
           id:Math.random(),
           action:text,
           isDone:false

       }
       dispatch(handleAdd(newTasks))
       setText("")


    }
  return (
    <div>
        <form action="" onSubmit={handeleSubmit}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddTask