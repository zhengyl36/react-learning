/**
 * Created by karl.zheng on 2018/2/28.
 */
import {connect} from 'react-redux'
import Todos from '../components/Todos'
import {addNodo} from '../actions'

const mapStateToProps = (state)=>({
    data: state.nodos
})

const mapDispatchToProps = (dispatch) => ({
    add: (nodo)=>{
        dispatch(addNodo(nodo));
    }
})

const NodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos)

export default NodoList
