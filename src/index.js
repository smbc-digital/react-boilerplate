import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Provider from './components/Provider'
import { Router } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import ScrollToTop from './components/ScrollToTop'

let history = createHistory()

export const Root = () => (
	<Provider>
		<ScrollToTop>
			<App />
		</ScrollToTop>
	</Provider>
)

if (typeof window !== 'undefined') {
	ReactDOM.hydrate(
		<Router history={history}><Root/></Router>
		,
		document.getElementById('root')
	)
}

