/**
 * Created by karl.zheng on 2018/1/8.
 */
import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {Router} from 'react-router'
import routeConfig from './router'

const store = createStore(reducer);

render((
    <Provider store={store}>
        <Router routes={routeConfig}/>
    </Provider>
),document.getElementById('app'));

