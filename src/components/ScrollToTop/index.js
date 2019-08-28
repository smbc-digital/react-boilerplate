import { useEffect } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

export const ScrollToTop = ({ location, children, ignoredPaths }) => {
	useEffect(() => {
		if (ignoredPaths.indexOf(location.pathname) !== -1) {
			return
		}

		window.scrollTo(0, 0)
	}, [location])

	return children
}

ScrollToTop.propTypes = {
	location: PropTypes.object,
	children: PropTypes.object,
	ignoredPaths: PropTypes.array
}

ScrollToTop.defaultProps = {
	ignoredPaths: []
}

export default withRouter(ScrollToTop)
