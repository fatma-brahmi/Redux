import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK ,TOGGLE_COMPLETE} from "../Consts/actionTypes"

const initialState = {
list:[
    {
        id:0,name:"HTML CSS",IsDone:false,
    },
     {
        id:1,name:"JS",IsDone:true,
    },
     {
        id:2,name:"React Js",IsDone:false,
    }
],status:"all"
}

export default (state = initialState, { type, payload }) => {
   
    switch (type) {

    case ADD_TASK:
        return {...state,list:[...state.list,payload] }
    case DELETE_TASK:
        return {...state,list:state.list.filter((el) => 
            el.id !== payload
        )}
            case FILTER_TASK:
                return{...state,status:payload}
                case EDIT_TASK:
                    return {
                      ...state,
                      list: state.list.map((todo) =>
                        todo.id === payload.id ? { ...todo, name: payload.name} : todo
                      ),
                    };
                  case TOGGLE_COMPLETE:
                    return {
                      ...state,
                      list: state.list.map((todo) =>
                        todo.id === payload ? { ...todo, IsDone: !todo.IsDone } : todo
                      ),
                    };
    default:
        return state
    }
}