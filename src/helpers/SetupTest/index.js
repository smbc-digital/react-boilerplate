import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() })

const useContextMock = jest.fn()
React.useContext = useContextMock

beforeEach(() => {
    useContextMock.mockReset()
})

export { React, mount, shallow, renderer, useContextMock }