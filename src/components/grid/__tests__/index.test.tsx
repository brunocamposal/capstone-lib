import React from 'react'
import Grid from '../index'
import Col from '../../col/index'
import renderer from 'react-test-renderer'

it('renders correctly grid', () => {
  const tree = renderer
    .create(
      <Grid>
        <Col width={12} backgroundColor='black'>
        </Col>
      </Grid>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
