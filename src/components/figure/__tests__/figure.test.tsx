import React from 'react'
import Figure from '../index'
import renderer from 'react-test-renderer'

describe('Figure', () => {
  it('should render a Figure', () => {
    const tree = renderer
    .create(
      <Figure
        src='https://440245-1378968-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/01/fatos-curiosos-sobre-o-homer-simpson.jpg'
        alt='Homer'
        definition='Simpson'
        x={120}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
