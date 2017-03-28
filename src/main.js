import React from 'react'
import { render } from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import Room from './containers/room'
import Robot from './containers/robot'
import Controls from './containers/controls'
import DirtCollection from './containers/dirt'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return <div>
      <BrowserRouter>
        <Route path='/'>
          <div>
            <Room>
              <Robot />
              <DirtCollection />
            </Room>
            <Controls />
          </div>
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
