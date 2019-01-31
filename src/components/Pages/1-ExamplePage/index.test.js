import { React, mount} from '../../../helpers/SetupTest'
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

        const history = { push: jest.fn() }
		const wrapper = mount(<ExamplePage context={data} history={history} />)

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
		
			// Act
			const tree = renderer
			.create(<ExamplePage context={data} />)
			.toJSON()
		
			// Assert
			expect(tree).toMatchSnapshot()
		})
	})
})
