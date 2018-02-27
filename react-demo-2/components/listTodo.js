/**
 * Created by karl.zheng on 2018/2/27.
 */
import React from 'react'

export default class ListTodo extends React.Component{
    render(){
        return (
            <ul>
                {
                    this.props.todos.map((node)=>
                       (<li key={node.id}>
                                <p>{node.todo}</p>
                                <button onClick={()=>this.props.delTodo(node.id)}>删除</button>
                       </li>)
                    )
                }
            </ul>
        )
    }
}
