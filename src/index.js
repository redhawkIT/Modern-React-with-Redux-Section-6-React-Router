import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {Router, browserHistory} from 'react-router'
import reducers from './reducers'
import routes from './routes'
import promise from 'redux-promise'

// www.blog.com/post/5
// whenever /post/5 changes browserHistory tells react-router to update

// hashHistory /# everything after the hash

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

render(
   <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
   </Provider>, document.querySelector('.container')
)
