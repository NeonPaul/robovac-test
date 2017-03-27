var test = require('tape')

import enums from '../src/enums'

test('enums helper', t => {
  t.deepEqual(
    enums('ONE', 'TWO'),
    {
      ONE: 'ONE',
      TWO: 'TWO'
    }
  )
  t.end()
})
