/**
 * Created by karl.zheng on 2018/2/27.
 */
const reducer = (state=[], action) => {
    switch(action.type){
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    todo: action.todo
                }
            ]

        case "DEL_TODO":
            return state.filter(
                todo => (todo.id!=action.id)
            )
        default:
            return state;
    }
};

export default reducer;



