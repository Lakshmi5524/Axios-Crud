import React, { useEffect, useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const Read = () => {
	const [apiData, setApiData] = useState([]);
	useEffect(() => {
		axios.get(`https://611b3ec722020a00175a43c1.mockapi.io/list`)
			.then((getData) => {
				setApiData(getData.data)
			})
	}, [])


	const setData = (id, firstName, lastName) => {
		localStorage.setItem('ID', id)
		localStorage.setItem('firstName', firstName)
		localStorage.setItem('lastName', lastName)
	}

	const getData = () => {
		axios.get(`https://611b3ec722020a00175a43c1.mockapi.io/list`)
			.then((getData) => {
				setApiData(getData.data)
			})
	}

	const onDelete = (id) => {
		axios.delete(`https://611b3ec722020a00175a43c1.mockapi.io/list/${id}`)
			.then(() => {
				getData();
			})
	}

	// const setID = (id) => {
	// 	console.log(id)
	// 	localStorage.setItem('ID', id)
	// }



	return (
		<div>
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Id</Table.HeaderCell>
						<Table.HeaderCell>First Name</Table.HeaderCell>
						<Table.HeaderCell>Last Name</Table.HeaderCell>
						<Table.HeaderCell>Update</Table.HeaderCell>
						<Table.HeaderCell>Delete</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{apiData.map((data) => {
						return (

							<Table.Row>
								<Table.Cell>{data.id}</Table.Cell>
								<Table.Cell>{data.firstName}</Table.Cell>
								<Table.Cell>{data.lastName}</Table.Cell>

								<Table.Cell>
									<Link to='/update'>
										<Button primary onClick={() => setData(data.id, data.firstName, data.lastName)}>Update</Button>
									</Link>
								</Table.Cell>

								<Table.Cell>
									<Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
								</Table.Cell>
							</Table.Row>
						)
					})}


				</Table.Body>
			</Table >
		</div >
	)
}
export default Read