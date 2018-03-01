# React-Router
  
  简单路由例子如下：  
  
```js

 <Router>
    <Route path="/" component={App}>
      <IndexRoute component={AllList} />
      <Route path="nodos" component={NodoList} />
      <Route path="todos" component={TodoList}>
    </Route>
  </Router>
  
```
  描述的是每个路径下对应的组件,  
  默认路由`IndexRoute`，如上述代码中，路由嵌套，用户访问'/'时，  
  默认渲染`IndexRoute`的组件  
  
## history

  分为三种：  
* browserHistory,  
* hashHistory,  
* createMemoryHistory
  
  `browserHistory`路径是这样的`/todos`  
  `hashHistory`路径是这样的 `#/todos`  
  `createMemoryHistory` 没用过，不清楚
  
  `react-router`推荐使用`browserHistory`，但需要服务端配合，否则打包后找不到路径  
  单页面使用`hashHistory`即可，不会出现找不到路径的问题  
  
## 遇到的问题
  
  1. 刷新之后页面404？
    
    
    webpack中添加配置
 ```js
    devServer: {
        historyApiFallback: true,
    }
 ```
  2. 设置好路由后子路由没有加载
  
  
  查看路由上层组件中是否有添加 `this.props.children`
  
```js
  class App extends React.Component{
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
  }
```

## 路由太多容易混淆，可以直接使用配置文件

```js
  const routeConfig = [
      {
          path: '/',
          component: App,
          indexRoute : {component: AllList},
          childRoutes: [
              {
                  path: 'nodos',
                  component: NodoList
              },
              {
                  path: 'todos',
                  component: TodoList
              }
          ]
      }
  ]
  
  export default routeConfig
  
  render((
    <Provider store={store} >
        <Router routes={routeConfig}/>
    </Provider>
  ),document.getElementById('app'));

```
  


