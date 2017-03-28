import React from 'react'

// Fetch the input value from the event and pass it to a function
const inputChange = fn =>
  e => fn(e.target.value)

// Pulls out form field values from a submit event, returns them as an object
const formValues = names =>
  e => {
    e.preventDefault()
    return names.reduce(
      (obj, name) => {
        obj[name] = e.target[name].value
        return obj
      },
      {}
    )
  }

const CoordInput = ({ upperBound, name, onChange, value }) =>
  <input type='number'
    name={name}
    value={value}
    max={upperBound - 1}
    min='0' step='1'
    required
    onChange={e => (onChange && inputChange(onChange)(e))} />

const Setup = ({ rows, cols, setRows, setCols, dirtLocations, addDirt, removeDirt, setStart, robot, onSubmit }) => (
  <div>
    <h1>
      Welcome to roombot!
    </h1>
    <p>
      Configure your room below then click start to begin.
      Coördinates are relative to the bottom-left corner of the room.
    </p>
    <fieldset>
      <legend>Room size</legend>
      <label>
        Height <input type='number' value={rows} onChange={inputChange(setRows)} />
      </label><br />
      <label>
        Width <input type='number' value={cols} onChange={inputChange(setCols)} />
      </label>
    </fieldset>

    <fieldset>
      <legend>Dirt</legend>
      <p>
        Enter 0 or more dirt patches.
        They will be represented by brown squares on the grid.
        Make sure you click Add after you enter your dirt coördinates!
      </p>
      <ul>{ dirtLocations.map(({ x, y }) =>
        <li key={y + ',' + x}>
          y: { y }, x: { x }
          <button onClick={() => removeDirt({ x, y })}>Remove</button>
        </li>
      ) }</ul>
      <form onSubmit={e => addDirt(formValues(['x', 'y'])(e))}>
        y: <CoordInput name='y' upperBound={rows} /><br />
        x: <CoordInput name='x' upperBound={cols} /><br />
        <button type='submit'>Add</button>
      </form>
    </fieldset>

    <fieldset>
      <legend>Staring point</legend>
      <p>
        Specifies where the robot starts in the room.
      </p>
      y: <CoordInput value={robot.y} name='y' upperBound={rows} onChange={y => setStart({y})} /><br />
      x: <CoordInput value={robot.x} name='x' upperBound={cols} onChange={x => setStart({x})} />
    </fieldset>

    <button onClick={onSubmit}>Start</button>
  </div>
)

export default Setup
