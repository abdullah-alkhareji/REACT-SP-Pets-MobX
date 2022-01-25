import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import store from "../petStore";

const PetCreateModal = ({ isOpen, handleClose }) => {
	const [newPet, setNewPet] = useState({
		name: "",
		type: "",
		image: "",
	});

	const handleChange = event => {
		setNewPet({ ...newPet, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		store.addPet(newPet);
		handleClose();
	};

	return (
		<Modal show={isOpen} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Form onSubmit={handleSubmit}>
				<Modal.Body>
					<Form.Group>
						<Form.Label>Pet Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter Pet Name'
							name='name'
							onChange={handleChange}
						/>
					</Form.Group>
					<br />
					<Form.Group>
						<Form.Label>Pet Type</Form.Label>
						<Form.Select className='ms-3' name='type' onChange={handleChange}>
							<option>Select Type</option>
							<option value='Cat'>Cat</option>
							<option value='Dog'>Dog</option>
							<option value='Rabbit'>Rabbit</option>
						</Form.Select>
					</Form.Group>
					<br />
					<Form.Group>
						<Form.Label>Pet Image</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter Pet Image URL'
							name='image'
							onChange={handleChange}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default PetCreateModal;
