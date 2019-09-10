import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../context/'

const Provider = ({ children }) => {
	const [state, setState] = useState({
		example: {
			value: '',
			isValid: false
		},
		example2: {
			value: '',
			isValid: false
		},
		displayRecaptcha: document.getElementById('displayRecaptcha') ? document.getElementById('displayRecaptcha').innerHTML === 'true' : false
	})

	const onChange = (event, isValid) => {
		setState({
			...state,
			[event.target.name]: {
				value: event.target.value,
				isValid
			}
		})
	}

	return <Context.Provider value={{ ...state, onChange }}>{children}</Context.Provider>
}

Provider.propTypes = {
	children: PropTypes.object
}

export default Provider