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
    <fieldset>
      <legend>Room size</legend>
      <label>
        Rows <input type='number' value={rows} onChange={inputChange(setRows)} />
      </label>
      <label>
        Cols <input type='number' value={cols} onChange={inputChange(setCols)} />
      </label>
    </fieldset>

    <fieldset>
      <legend>Dirt</legend>
      { dirtLocations.map(({ x, y }) =>
        <div key={y + ',' + x}>
          {y + ',' + x },
          <button onClick={() => removeDirt({ x, y })}>Remove</button>
        </div>
      ) }
      <form onSubmit={e => addDirt(formValues(['x', 'y'])(e))}>
        <CoordInput name='y' upperBound={rows} />,
        <CoordInput name='x' upperBound={cols} />
        <button type='submit'>Add</button>
      </form>
    </fieldset>

    <fieldset>
      <legend>Staring point</legend>
      <CoordInput value={robot.y} name='y' upperBound={rows} onChange={y => setStart({y})} />,
      <CoordInput value={robot.x} name='x' upperBound={cols} onChange={x => setStart({x})} />
    </fieldset>

    <button onClick={onSubmit}>Start</button>
  </div>
)

export default Setup
