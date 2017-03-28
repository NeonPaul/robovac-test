import React from 'react'
import { render } from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import Room from './containers/room'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return <div>
      <BrowserRouter>
        <Route path='/'>
          <Room />
        </Route>
      </BrowserRouter>
    </div>
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
