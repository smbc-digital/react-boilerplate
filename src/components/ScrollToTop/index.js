import {Component} from 'react'
import {withRouter} from 'react-router'
import PropTypes from 'prop-types'

export class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0)
		}
	}

	render() {
		return this.props.children
	}
}

ScrollToTop.propTypes = {
	location: PropTypes.string,
	children: PropTypes.object,
}

export default withRouter(ScrollToTop)
