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

	const displayRecaptcha = document.getElementById('displayRecaptcha') ? document.getElementById('displayRecaptcha').innerHTML === 'true' : false

	const [ state, setState ] = useState({
		example: {
			value:'',
			isValid: false
		},
		example2: {
			value: '',
			isValid: false
		},
		displayRecaptcha,
		onChange: onChange
	})
	
	return <Context.Provider value={ state }>{ children }</Context.Provider>
}

Provider.propTypes = {
	children: PropTypes.object
}

export default Provider