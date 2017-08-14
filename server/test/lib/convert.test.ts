import 'mocha'
import { expect } from 'chai'
import convert from 'lib/convert'

describe('test of convert', () => {
  it('should convert object to mapped prototype', () => {
    const result = convert({
      a: 'aaa',
      b: true,
      c: 1,
    })
    expect(result).to.deep.equal({
      a: String,
      b: Boolean,
      c: Number,
    })
  })
})
