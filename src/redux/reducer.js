import { COMPLETE, DELETE,ADD, EDIT, FILTER } from "./actionTypes";

  


  const init={tasks:[
    {id:Math.random(),action:'go shopping', isDone:true},
    {id:Math.random(),action:'go for lunch', isDone:false},
   ],
   isFiltered:false
}
  export const reducer = (state=init,{type,payload})=>{
       switch (type) {
           case DELETE:
               return{
                   ...state,tasks:state.tasks.filter(el=>el.id!==payload)
               }
               case COMPLETE:
                   return{
                       ...state,tasks:state.tasks.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)

                   }
                   case ADD:
                       return{
                           ...state,tasks:[...state.tasks,payload]
                       }
                       case EDIT:
                           return{
                               ...state,tasks:state.tasks.map(el=>el.id===payload.id?payload:el)
                           }
                           case FILTER:
                               return{
                                   ...state,isFiltered:!state.isFiltered

                               }
                           

               
              
       
           default:
               return state
               
       }
   }