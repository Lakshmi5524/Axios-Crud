import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router'


const Create = () => {
	let history = useHistory()
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')

	const sendDataToAPI = () => {
		axios.post('https://611b3ec722020a00175a43c1.mockapi.io/list', {
			firstName,
			lastName
		}).then(() => {
			history.push('/read')
		})
	}
	return (
		<Form>
			<Form.Field>
				<label>First Name</label>
				<input
					name="fname"
					placeholder='First Name'
					onChange={(e) => setFirstName(e.target.value)} />
			</Form.Field>
			<Form.Field>
				<label>Last Name</label>
				<input name="lname" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
			</Form.Field>
			<Button color="black" type='submit' onClick={sendDataToAPI}>Submit</Button>
		</Form >
	)
}
export default Create