/**
 * Created by karl.zheng on 2018/2/28.
 */
import {combineReducers} from 'redux'
import todos from './todos'
import nodos from './nodos'

const reducer = combineReducers({
    todos,
    nodos
})

export default reducer;