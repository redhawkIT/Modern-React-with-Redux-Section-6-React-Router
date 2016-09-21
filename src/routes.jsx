import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/app'

// test component

const Greeting = () => {
  return <div>Testing 123</div>
}

export default(
  <Route path="/" component={App}>
    <Route path="greet" component={Greeting}/>
    <Route path="greet2" component={Greeting}/>
    <Route path="greet3" component={Greeting}/>
  </Route>
)
