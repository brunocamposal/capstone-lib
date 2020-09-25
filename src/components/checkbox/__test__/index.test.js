import React from 'react'
import Checkbox from '../index'
import renderer from 'react-test-renderer'

it('should render a checkbox', () => {
  const tree = renderer
    .create(
      <>
        <Checkbox
          type='checkbox'
          className='caps-lib-checkbox'
          name='label'
          value='value'
          onClick={() => {}}
          checked
        />
        label
      </>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
