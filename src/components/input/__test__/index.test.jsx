import React from 'react'
import Input from '../index'
import renderer from 'react-test-renderer'

it('input renderizando corretamente', () => {
  const tree = renderer
    .create(
      <Input
        id='id'
        name='name'
        onChange={() => {}}
        placeholder='place'
        value='value'
        type='text'
      />
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
