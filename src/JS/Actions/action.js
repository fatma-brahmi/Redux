import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK,TOGGLE_COMPLETE} from "../Consts/actionTypes"

export const add_task=(newTask) => {
    return{
        type:ADD_TASK,
        payload:newTask
    }
    
} 
export const delete_task=(id) => {
    return{
        type:DELETE_TASK,
        payload:id
    }
    
}
export const filter_task=(status) => {
    return{
        type:FILTER_TASK,
        payload:status
    }
    
}
export const complete=(id) => {
    return{
        type:TOGGLE_COMPLETE,
        payload:id
    }
 }
export function edit_task(id, name){
    return {
        type:EDIT_TASK,
        payload:  { id, name},
    }
     }


