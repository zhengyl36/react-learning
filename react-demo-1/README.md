# react组件间数据传递

  组件内数据主要为对象state，父级组件与子级组件数据传递主要靠props
  
#### 父传子

  使用props属性，可以将数据传递给子级组件,组件中props发生变化并不会对state中通过props赋值的值进行重新赋值，因此
  
  子组件中对props传递的数据的两种使用方式
  
  一种是直接使用this.props，随父组件传递的props发生改变而改变，子组件无法作用于props改变其值
  
  一种是将props赋值到state中，子组件中添加函数`componentWillReceiveProps`,使props发生改变时更新state
  
```js
例子（值）：
  <Win winShow={this.state.isShow}/>
  
  //Win组件中
  componentWillReceiveProps(nextProp){
      this.setState({
          isWin: nextProp.winShow
      })
  }
```

### 子传父

  父组件将定义好的函数当做子组件的props传递给子组件
  
  子组件通过调用父组件给赋予的props中的函数，改变或传递数据到父组件中，实现数据交互
  
```js
  <a href="javascript:void(0);" className="open" onClick={this.props.callbackParent}>打开窗口</a>
    handleChange(e){
      console.log(e.target.value);
      return this.setState({
          value: e.target.value
      })
  }
```
  

### 组件间数据交互常用ref获取DOM

  ref获取DOM来获取想要的属性和值

```js
  let input
  render (
    <div>
      <input ref={node => input = node}/>
      <a href="javascript:void(0);" onClick={()=>{this.getInput(input)}}>
    </div>
  )
  
  getInput(input){
    console.log(input.value);
  }
```



  
