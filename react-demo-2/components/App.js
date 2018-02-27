/**
 * Created by karl.zheng on 2018/2/27.
 */
import React from 'react'
import InputTodo from './inputTodo'
import Todos from '../containers/todos'

export default class APP extends React.Component{
    render(){
        return (
            <div className="container">
                <InputTodo />
                <Todos />
            </div>
        )
    }
}







