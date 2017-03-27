import React from 'react'
import { render } from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import Counter from './containers/counter'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return <div>
      <BrowserRouter>
        <div>
          <Route path='/' component={Counter} />
        </div>
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
