import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../context/'

const Provider = ({ children }) => {
	const onChange = (event, isValid) => {
		setState({
			...state,
			[event.target.name]: {
				value: event.target.value, 
				isValid
			}})
	}

	const [ state, setState ] = useState({
		example: {
			value:'',
			isValid: false
		},
		example2: {
			value: '',
			isValid: false
		},
		displayRecaptcha: document.getElementById('displayRecaptcha') ? document.getElementById('displayRecaptcha').innerHTML === 'true' : false,
		onChange: onChange
	})
	
	return <Context.Provider value={ state }>{ children }</Context.Provider>
}

Provider.propTypes = {
	children: PropTypes.object
}

export default Provider