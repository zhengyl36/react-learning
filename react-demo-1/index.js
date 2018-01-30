/**
 * Created by karl.zheng on 2018/1/29.
 */
import React from 'react'
import { render } from 'react-dom'
import './css/reset.css'
import './css/base.css'
import Top from './module/top'
import Win from './module/win'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: false,
            value: "123"
        };
        this.changeState = this.changeState.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    changeState(){
        return this.setState({
            isShow: true,
        })
    }

    handleChange(e){
        console.log(e.target.value);
        return this.setState({
            value: e.target.value
        })
    }

    render(){
        return (
            <div className="container">
                <Top callbackParent={this.changeState}/>

                <Win winShow={this.state.isShow} handleChange={this.handleChange}/>

                <p className="result">{this.state.value}</p>
            </div>
        )
    }
}

render((
    <App />
),document.getElementById('app'));

