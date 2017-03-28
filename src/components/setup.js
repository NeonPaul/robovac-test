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

const Setup = ({ rows, cols, setRows, setCols, dirtLocations, addDirt, removeDirt }) => (
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
        <input type='number' name='y' max={rows - 1} min='0' step='1' required />,
        <input type='number' name='x' max={cols - 1} min='0' step='1' required />
        <button type='submit'>Add</button>
      </form>
    </fieldset>
  </div>
)

export default Setup
