import React, { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router'


const Update = () => {

	let history = useHistory()
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [ID, setID] = useState(null)


	const sendDataToAPI = () => {
		axios.put(`https://611b3ec722020a00175a43c1.mockapi.io/list/${ID}`, {
			firstName,
			lastName
		}).then(() => {
			history.push('/read')

		})
	}

	useEffect(() => {
		setFirstName(localStorage.getItem('firstName'))
		setFirstName(localStorage.getItem('lastName'))
		setID(localStorage.getItem('ID'))
	}, [])


	return (
		<Form>
			<Form.Field>
				<label>First Name</label>
				<input
					name="fname"
					value={firstName}
					placeholder='First Name'
					onChange={(e) => setFirstName(e.target.value)} />
			</Form.Field>
			<Form.Field>
				<label>Last Name</label>
				<input
					name="lname"
					value={lastName}
					placeholder='Last Name'
					onChange={(e) => setLastName(e.target.value)} />
			</Form.Field>
			<Button type='submit' onClick={sendDataToAPI}>Update</Button>
		</Form >
	)
}
export default Update