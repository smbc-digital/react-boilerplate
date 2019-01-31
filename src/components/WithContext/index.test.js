import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import withContext from './index'

const EmptyComponent = () => <div></div>
Enzyme.configure({ adapter: new Adapter() })

describe('withContext', () => {

    it('should add context prop to component', () => {
        const ComponentWithContext = withContext(EmptyComponent)

        const wrapper = mount(<ComponentWithContext test='test'/>)

        expect(wrapper.props().context).not.toBeNull()
        expect(wrapper.props().test).toBe('test')
    })
})