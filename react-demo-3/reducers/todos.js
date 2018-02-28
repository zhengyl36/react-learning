/**
 * Created by karl.zheng on 2018/2/28.
 */
let todoIndex = 0;
const todos = (state=[], action)=>{
    switch (action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: todoIndex++,
                    todo: action.todo
                }
            ]
        default:
            return state;
    }
}

export default todos;
