import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../context/'

class Provider extends Component{
	constructor(props){
		super(props)
		this.state = {
			example: {
				value:'',
				isValid: false
			},
			displayRecaptcha: document.getElementById('displayRecaptcha') != null ? document.getElementById('displayRecaptcha').innerHTML === 'true' ? true : false : false,
			onChange: this.onChange,
			onFormSubmission: this.onFormSubmission
		}
	}
	
	onChange = (event, isValid) => {
		this.setState({
			[event.target.name]: {
				value: event.target.name, 
				isValid
			}})
	}

	onFormSubmission = () => {
		const copyOfState = Object.assign({}, this.state)
		copyOfState.submittedFormSuccessfully = true
		
		this.setState(copyOfState)
	}

	render(){
		return <Context.Provider value={ this.state }>{this.props.children}</Context.Provider>
	}
}

Provider.propTypes = {
	history: PropTypes.object,
	context: PropTypes.object,
	children: PropTypes.object,
	mockState: PropTypes.object
}

export default Provider