import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { RadioInputsContainer, Button, AlertForm } from 'smbc-react-components'
import { getPageRoute } from '../../../helpers/pagehelper'
import { Context } from '../../../context'

const ExamplePage = ({ history }) => {
	const { example, onChange } = useContext(Context)
	
	const options = [{
		label: 'Yes',
		id: 'yes',
		name: 'example',
		value: 'yes'
	},
	{
		label: 'No',
		id: 'no',
		name: 'example',
		value: 'no'
	}]
	
	const onSubmit = (event) => {
		event.preventDefault()
		if (example.value === 'yes') {
			history.push(getPageRoute(1))
		} else {
			history.push(getPageRoute(2))
		}
	}

	return (
		<Fragment>
			<form onSubmit={onSubmit}>
				<h1>Boilerplate</h1>
				<h2>This is an example form</h2>
				<AlertForm 
					level="information" 
					content="This is a boilerplate, enjoy!" 
				/>
				<RadioInputsContainer
					onChange={onChange}
					options={options}
					value={example.value}
					displayHeading={false}
					legend='Go to next page?'
				/>
				<Button label="Next step" isValid={example.isValid} />
			</form>
		</Fragment>
	)
}

ExamplePage.propTypes = {
	history: PropTypes.object
}

export default ExamplePage
