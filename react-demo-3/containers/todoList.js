/**
 * Created by karl.zheng on 2018/2/28.
 */
import {connect} from 'react-redux'
import Todos from '../components/Todos'
import {addTodo} from '../actions'

const mapStateToProps = (state)=>({
    data: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    add: (todo)=>{
        dispatch(addTodo(todo));
    }
})

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos)

export default TodoList