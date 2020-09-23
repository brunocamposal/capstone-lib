import React from 'react'
import Input from '../index'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

describe('Teste Snapshot', () => {
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
})

describe('Teste Shallow Enzyme', () => {
  it('simulando o onChange', () => {
    const onChangeSpy = jest.fn()
    const wrapper = shallow(<Input onChange={onChangeSpy} />)
    wrapper.simulate('change')
    expect(onChangeSpy).toHaveBeenCalled()
  })

  it('vendo se tem todos os argumentos', () => {
    const wrapper = shallow(
      <Input
        id='id'
        value='value'
        type='type'
        placeholder='placeholder'
        name='name'
        onChange={[Function]}
      />
    )

    expect(
      wrapper.equals(
        <input
          id='id'
          value='value'
          type='type'
          placeholder='placeholder'
          name='name'
          onChange={[Function]}
        />
      )
    ).toBeTruthy()
  })
})
