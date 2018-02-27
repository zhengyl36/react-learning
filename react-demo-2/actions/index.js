/**
 * Created by karl.zheng on 2018/2/27.
 */
let todoIndex = 0;
export const addTodo = (todo)=>({
    type: "ADD_TODO",
    id: todoIndex++,
    todo
});

export const delTodo = (id) => ({
    type: "DEL_TODO",
    id
})