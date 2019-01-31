import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Router } from 'react-router'
import App from './index.js'
import createHistory from 'history/createBrowserHistory'

Enzyme.configure({ adapter: new Adapter() })

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