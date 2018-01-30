# react组件间数据传递

  组件内数据主要为对象state，父级组件与子级组件数据传递主要靠props
  
#### 父传子

  使用props属性，可以将数据传递给子级组件
  
```js
例子（值）：
  <Win winShow={this.state.isShow}/>
  //传递了参数winShow给子组件,组件win可以通过`this.props.winShow`获取到父组件中isShow的值
  //子组件中对props传递的数据的两种使用方式
  //一种是直接使用this.props，随父组件传递的props发生改变而改变，子组件无法作用于props改变其值
  //一种是将props赋值到state中，子组件中添加函数,
  componentWillReceiveProps(nextProp){
      this.setState({
          isWin: nextProp.winShow
      })
  }
  //否则当父类改变props时，state值不会重新加载
```

### 子传父

  上述父传子中，父组件可以通过props将函数传递给子组件，子组件通过调用父组件的函数将数据传递给父组件
```js
  <a href="javascript:void(0);" className="open" onClick={this.props.callbackParent}>打开窗口</a>
  //callbackParent函数为父组件中的一个函数
  //将事件作为参数传递到函数中，获取对应数据
  handleChange(e){
      console.log(e.target.value);
      return this.setState({
          value: e.target.value
      })
  }
```

### 组件间

  组件间传递数据需要满足两个组件拥有同一个父组件的条件，这样可以通过子组件改变父组件state中的值，
  
  来改变其他子组件的props属性，达到数据传递的效果
  
  
