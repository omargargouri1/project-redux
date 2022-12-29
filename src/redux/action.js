import { ADD, COMPLETE, DELETE, EDIT, FILTER } from "./actionTypes"




 export const handleDelete = (x)=>{
    return{
        type:DELETE,
        payload:x
    }
}
export const handleComplete = (x)=>{
    return{
        type:COMPLETE,
        payload:x
    }
}

export const handleAdd = (obj)=>{
    return{
        type:ADD,
        payload:obj
    }
}
export const handleEdit = (Obj)=>{
    return{
        type:EDIT,
        payload:Obj,
    }
}
export const handeleFiler=()=>{
    return{
        type:FILTER
    }
}