import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_task } from '../JS/Actions/action'




const AddTask = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const add=() => {
        if (text) {
          dispatch(add_task({id:Date.now(),name:text.trim(),IsDone:false}))
   setText("");  
        } else {
            alert("oupps")
        }
    }
    return (
        <div className="add">
          <input className='todo-input' type="text" onChange={(e)=> setText(e.target.value)} value={text} />  
          <button className='btn-add' onClick={add}>Add</button>
        </div>
    )
}

export default AddTask