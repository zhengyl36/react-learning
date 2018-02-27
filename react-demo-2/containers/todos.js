/**
 * Created by karl.zheng on 2018/2/27.
 */
import ListTodo from '../components/listTodo'
import {connect} from 'react-redux'
import {delTodo} from '../actions'

const mapStateToProps = (state) => ({
    todos: state
})

const mapDispatchToProps = (dispatch)=>({
    delTodo: (id)=>{
        dispatch(delTodo(id));
    }
})

var Todos = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTodo)

export default Todos