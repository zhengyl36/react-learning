/**
 * Created by karl.zheng on 2018/1/8.
 */
import React,{Component} from 'react'

export default class Win extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isWin: this.props.winShow,
        }
        this.closeWin = this.closeWin.bind(this);
    }

    componentWillReceiveProps(nextProp){
        this.setState({
            isWin: nextProp.winShow
        })
    }

    getWin(){
        return this.state.isWin ? "active" : ""
    }

    closeWin(){
        this.setState({
            isWin: false
        })
    }

    render(){
        return (
            <div>
                <div className={"wrap " + this.getWin()} ></div>
                <div className={"win "+ this.getWin()}>
                    <a href="javascript:void(0);" className="close block" onClick={this.closeWin}>×</a>
                    <p>
                        props 和 state
                    </p>
                </div>
            </div>
        )
    }
}