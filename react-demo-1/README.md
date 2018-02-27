# react组件间数据传递

  组件内数据主要为对象`state`，父级组件与子级组件数据传递主要靠`props`
  
#### 父传子

  使用`props`属性，可以将数据传递给子级组件,组件中`props`发生变化并不会对`state`中通过`props`赋值的值进行重新赋值，因此
  
  子组件中对`props`传递的数据的两种使用方式
  
  一种是直接使用`this.props`，随父组件传递的`props`发生改变而改变，子组件无法作用于`props`改变其值
  
  一种是将`props`赋值到`state`中，子组件中添加函数`componentWillReceiveProps`,使`props`发生改变时更新`state`
  
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

  父组件将定义好的函数当做子组件的`props`传递给子组件
  
  子组件通过调用父组件给赋予的`props`中的函数，改变或传递数据到父组件中，实现数据交互
  
```js
  <a href="javascript:void(0);" className="open" onClick={this.props.callbackParent}>打开窗口</a>
    handleChange(e){
      console.log(e.target.value);
      return this.setState({
          value: e.target.value
      })
  }
```
  

### 组件间数据交互常用`ref`获取DOM

  `ref`获取`DOM`来获取想要的属性和值

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



  
