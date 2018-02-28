/**
 * Created by karl.zheng on 2018/2/28.
 */
import React from 'react'
import {connect} from 'react-redux'
import {addNodo, addTodo} from '../actions'
import {Link} from 'react-router'

class App extends React.Component{
    render(){
        return (
            <div>
                <div><Link to="/">home</Link></div>
                <div><Link to="/nodos">nodos</Link></div>
                <div><Link to="/todos">todos</Link></div>
                {this.props.children}
            </div>
        )
    }
}

export default connect()(App);



