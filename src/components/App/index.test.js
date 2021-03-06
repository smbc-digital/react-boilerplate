import { React, mount} from '../../helpers/SetupTest'
import { Router } from 'react-router'
import App from './index.js'
import createHistory from 'history/createBrowserHistory'

describe('App', () => {
	it('should render a Switch', () => {
		// Arrange
		let history = createHistory()
		
		// Act
		const enzymeWrapper = mount(
			<Router history={history}>
				<App />
			</Router>
		)

		// Assert
		expect(enzymeWrapper.find('Switch').exists()).toBe(true)
	})
})