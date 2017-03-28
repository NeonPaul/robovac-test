import React from 'react'
import { render } from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import Room from './containers/room'
import Robot from './containers/robot'
import Controls from './containers/controls'
import Setup from './containers/setup'
import DirtCollection from './containers/dirt'

class App extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      setup: true
    }
  }

  render () {
    return <div>
      { this.state.setup
        ? <Setup onSubmit={() => this.setState({ setup: false })} />
      : <div>
        <div style={{ display: 'inline-block' }}>
          <Room>
            <Robot />
            <DirtCollection />
          </Room>
        </div>
        <div style={{ display: 'inline-block' }}>
          <Controls />
        </div>
      </div>
      }
    </div>
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
