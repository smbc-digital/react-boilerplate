import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Provider from '../Provider'

Enzyme.configure({ adapter: new Adapter() })

describe('Provider', () => {
    it('should create the base state with objects', () => {
        //Arrange
        const wrapper = mount(<Provider></Provider>)

        //Assert
        expect(wrapper.state()).not.toBeNull()
    })
})