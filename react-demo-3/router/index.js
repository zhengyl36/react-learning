/**
 * Created by karl.zheng on 2018/2/28.
 */
import App from '../components/App'
import NodoList from '../containers/nodoList'
import TodoList from '../containers/todoList'
import AllList from '../containers/all'

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