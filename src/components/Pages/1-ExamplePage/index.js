import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { RadioInputsContainer, Button, AlertForm } from 'smbc-react-components'
import { getPageRoute } from '../../../helpers/pagehelper'

export const ExamplePage = props => {
	const { context, history } = props
	
	const onSubmit = (event) => {
		event.preventDefault()
		if (context.example.value === 'yes') {
			history.push(getPageRoute(1))
		} else {
			history.push(getPageRoute(1))
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
					onChange={context.onChange}
					options={[{
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
					}]}
					value={context.example.value}
					displayHeading={false}
					legend='Go to next page?'
				/>
				<Button label="Next step" isValid={context.example.isValid} />
			</form>
		</Fragment>
	)
}

ExamplePage.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(ExamplePage)
