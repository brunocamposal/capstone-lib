import React from 'react'
import renderer from 'react-test-renderer'
import { Figure } from 'capstone-lib/'

describe('Figure: ', () => {
  it('renders the component', () => {
    const tree = renderer
      .create(<Figure alt='coisa' url='http://teste.coisa.com' y={140} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
