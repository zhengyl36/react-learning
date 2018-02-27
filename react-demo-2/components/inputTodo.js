/**
 * Created by karl.zheng on 2018/2/27.
 */
import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

export class InputTodo extends React.Component{
    render(){
        const {dispatch} = this.props;
        let input;
        return (
            <div className="box-todo">
                <input type="text" ref={node => {input = node}} />
                <button className="add" onClick={()=>{
                    input.value?dispatch(addTodo(input.value)):alert("input can't be empty");
                    input.value = "";
                }}>Add</button>
            </div>
        )
    }
}

export default connect()(InputTodo)