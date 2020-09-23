import React from 'react'
import Col from '../index'
import renderer from 'react-test-renderer'

it('renderer', () => {
  const tree = renderer
    .create(
      <Col width={12} backgroundColor='white'>
        teste
      </Col>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
