# react-learning
react学习中

### react-demo-1 简单讲述react数据传递方式

充react-demo-1中可以看出，react中数据交互只能层层传递，DOM间共同只能将state放到共有的父组件中来管理，再作为props分发回子组件。

为了面临所有可能的扩展问题，最容易想到的办法就是把所有state集中放到所有组件顶层，然后分发给所有组件。 为更好的管理这个state，引入redux

### react-demo-2 使用redux进行数据传递

参考知乎 [https://www.zhihu.com/question/41312576?sort=created](https://www.zhihu.com/question/41312576?sort=created) 理解redux
