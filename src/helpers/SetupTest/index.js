import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const useContextMock = jest.fn()
React.useContext = useContextMock
const useStateMock = jest.fn()
React.useState = useStateMock

beforeEach(() => {
    useContextMock.mockReset()
    useStateMock.mockReset()
})

export {React, mount, shallow, useContextMock, useStateMock}