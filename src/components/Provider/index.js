import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
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
			onAddressChange: this.onAddressChange,
			onChangePaymentDate: this.onChangePaymentDate,
			onCheckBoxChange: this.onCheckBoxChange,
			onFormSubmission: this.onFormSubmission
		}
	}
	
	onChange = (event, isValid) => {
		const copyOfState = Object.assign({}, this.state)
		copyOfState[event.target.name].value = event.target.value
		copyOfState[event.target.name].isValid = isValid

		this.setState(copyOfState)
	}

	onAddressChange = (isValid, addressDetails, ) => {
		const copyOfState = Object.assign({}, this.state)
		copyOfState.address.value = addressDetails
		copyOfState.address.isValid = isValid

		this.setState(copyOfState)
	}

	onCheckBoxChange = (event, isValid) => {
		const copyOfState = Object.assign({}, this.state)
		copyOfState[event.target.name].value = event.target.checked
		copyOfState[event.target.name].isValid = isValid

		this.setState(copyOfState)
	}

	onChangePaymentDate = (event, isValid, applicationDate) => {
		const copyOfState = Object.assign({}, this.state)
		copyOfState[event.target.name].value = event.target.value
		copyOfState[event.target.name].isValid = isValid

		copyOfState.applicationDate = applicationDate
		copyOfState.firstPaymentDate = moment(copyOfState.applicationDate).date(copyOfState.paymentDate.value)

		for(let i=0; copyOfState.firstPaymentDate.diff(copyOfState.applicationDate, 'days') < 14 || copyOfState.firstPaymentDate.format('DDMMMM') == '01January'; i++){
			copyOfState.firstPaymentDate = copyOfState.firstPaymentDate.add(1, 'month')
		}
		
		this.setState(copyOfState)
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