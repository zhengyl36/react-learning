/**
 * Created by karl.zheng on 2018/1/8.
 */
import React,{Component} from 'react'

export default class Top extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="top">
                <h1>react 学习一</h1>
                <h2>组件间的数据传递</h2>
                <a href="javascript:void(0);" className="open" onClick={this.props.callbackParent}>打开窗口</a>
            </div>
        )
    }
}