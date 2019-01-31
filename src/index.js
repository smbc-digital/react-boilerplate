import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Provider from './components/Provider'
import { Router } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import ScrollToTop from './components/ScrollToTop'

let history = createHistory()

ReactDOM.render(
	<Provider>
		<Router history={history}>
			<ScrollToTop>
				<App />
			</ScrollToTop>
		</Router>
	</Provider>,
	document.getElementById('root')
)
