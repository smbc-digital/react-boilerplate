import { React, mount, useContextMock, renderer } from '../../../helpers/SetupTest'
import ExamplePage from './index'
import { getPageRoute } from '../../../helpers/pagehelper'

describe('ExamplePage', () => {
    const history = { push: jest.fn() }

    it('should render the component', () => {
        // Arrange
        const data = {
            example: {
                value: 'yes',
                isValid: true
            },
            onChange: jest.fn()
        }
        useContextMock.mockReturnValueOnce(data)

        // Act
        let wrapper = mount(<ExamplePage history={history} />)

        // Assert
        expect(wrapper.find('RadioInputsContainer').exists()).toBeTruthy()
        expect(wrapper.find('AlertForm').exists()).toBeTruthy()
        expect(wrapper.find('Button').exists()).toBeTruthy()
        expect(wrapper.find('h1').exists()).toBeTruthy()
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.find('form').exists()).toBeTruthy()
    })

    it('should call push on submit', () => {
        // Arrange
        const data = {
            example: {
                value: 'yes',
                isValid: true
            },
            onChange: jest.fn()
        }
        useContextMock.mockReturnValueOnce(data)

        // Act
        let wrapper = mount(<ExamplePage history={history} />)
        wrapper.find('form').simulate('submit')


        // Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(1))
    })

    it('should go to page 2 when value is no', () => {
        // Arrange
        const data = {
            example: {
                value: 'no',
                isValid: true
            },
            onChange: jest.fn()
        }
        useContextMock.mockReturnValueOnce(data)

        // Act
        let wrapper = mount(<ExamplePage history={history} />)
        wrapper.find('form').simulate('submit')

        // Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(2))
    })

    describe('snapshot', () => {
		it('should render correctly',() => { 
			// Arrange
            const data = {
                example: {
                    value: 'yes',
                    isValid: true
                },
                onChange: jest.fn()
            }
            useContextMock.mockReturnValueOnce(data)
		
			// Act
			const tree = renderer
			.create(<ExamplePage />)
			.toJSON()
		
			// Assert
			expect(tree).toMatchSnapshot()
		})
	})
})
