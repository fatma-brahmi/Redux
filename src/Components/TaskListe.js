import React from 'react'
import { useSelector } from 'react-redux'
import TaskItems from './TaskItems'

const TaskListe = () => {
    const list = useSelector(state => state.taskReducer.list)

const status = useSelector(state => state.taskReducer.status)
    return (
        <div>
            {status==="all" ?
            list.map((el)=><TaskItems  todo={el}/>)
            : status=== "done" 
            ? list.filter((el) =>el.IsDone===true ).map((el)=><TaskItems key={el.id} todo={el}/>):
             list.filter((el) =>el.IsDone===false ).map((el)=><TaskItems key={el.id} todo={el}/>)

            }
        </div>
    )
}

export default TaskListe