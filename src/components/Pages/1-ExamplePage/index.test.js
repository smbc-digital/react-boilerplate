import { React, mount, useContextMock } from '../../../helpers/SetupTest'
import { ExamplePage } from './index'
import { getPageRoute } from '../../../helpers/pagehelper'
import renderer from 'react-test-renderer'

describe('ExamplePage', () => {
    it('should call push on submit', () => {
        //Arrange
        const data = {
            example: {
                value: 'yes',
                isValid: true
            }
        }
        useContextMock.mockReturnValueOnce(data)

        const history = { push: jest.fn() }
		const wrapper = mount(<ExamplePage history={history} />)

        //Act
        wrapper.find('form').simulate('submit')


        //Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(1))
    })

    describe('snapshot', () => {
		it('should render correctly',() => { 
			// Arrange
            const data = {
                example: {
                    value: 'yes',
                    isValid: true
                }
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
