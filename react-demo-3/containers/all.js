/**
 * Created by karl.zheng on 2018/2/28.
 */
import {connect} from 'react-redux'
import All from '../components/all'

const mapStateToProps = (state)=>({
    todos: state.todos,
    nodos: state.nodos
})

const AllList = connect(
    mapStateToProps
)(All)

export default AllList
