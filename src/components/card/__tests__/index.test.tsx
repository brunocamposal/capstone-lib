import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import Card from '../index'

describe("Render test", () => {
  it("Should render a card", () => {
    const tree = renderer
      .create(<Card imgUrl="Test url" description="Test Description" title="Test Title" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
describe('Teste Shallow Enzyme', () => {
  it('check attributes', () => {
    const wrapper = shallow(
      <Card
        title="Test title"
        description="test description"
        imgUrl="Test url"
      />
    )
    const src = wrapper.find("img").prop("src");
    expect(src).toBe("Test url")

    const description = wrapper.find('p').text()
    expect(description).toBe("test description")

    const title = wrapper.find('h2').text()
    expect(title).toBe("Test title")
  })
})



