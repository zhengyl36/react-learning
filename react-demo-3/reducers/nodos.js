/**
 * Created by karl.zheng on 2018/2/28.
 */
let nodoIndex = 0;
const nodos = (state=[], action)=>{
    switch (action.type){
        case 'ADD_NODO':
            return [
                ...state,
                {
                    id: nodoIndex++,
                    todo: action.todo
                }
            ]

        default:
            return state;
    }
}

export default nodos;

