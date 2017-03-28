import React, { Component } from 'react'

const LEFT = 37
const UP = 38
const RIGHT = 39
const DOWN = 40

class Controls extends Component {
  constructor (...args) {
    super(...args)
    this.handleKeydown = this.handleKeydown.bind(this)
  }

  render () {
    const {
      navNorth, navSouth, navEast, navWest,
      removed, remaining
    } = this.props

    return <div style={{ textAlign: 'center' }}>
      <button onClick={navNorth}>⬆️</button><br />
      <button onClick={navWest}>⬅️</button>
      <button onClick={navSouth}>⬇️</button>
      <button onClick={navEast}>➡️</button>
      <div>
        { removed } removed<br />
        { remaining } remaining
      </div>
    </div>
  }

  componentWillMount () {
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount () {
    document.addEventListener('keydown', this.handleKeydown)
  }

  handleKeydown (event) {
    switch (event.keyCode) {
      case UP:
        this.props.navNorth()
        break
      case DOWN:
        this.props.navSouth()
        break
      case RIGHT:
        this.props.navEast()
        break
      case LEFT:
        this.props.navWest()
        break
    }
  }
}

export default Controls
