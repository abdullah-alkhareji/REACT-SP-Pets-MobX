import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import store from "../petStore";

const PetUpdateModal = ({ isOpen, handleClose, pet }) => {
	const [updatePet, setUpdatePet] = useState(pet);

	const handleChange = event =>
		setUpdatePet({ ...updatePet, [event.target.name]: event.target.value });

	const handleSubmit = event => {
		event.preventDefault();
		store.updatePet(updatePet);
		handleClose();
	};

	return (
		<Modal show={isOpen} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Update</Modal.Title>
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
							value={updatePet.name}
						/>
					</Form.Group>
					<br />
					<Form.Group>
						<Form.Label>Pet Type</Form.Label>
						<Form.Select className='ms-3' name='type' onChange={handleChange}>
							<option>Select Type</option>
							<option
								value='Cat'
								selected={updatePet.type === "Cat" ? true : false}>
								Cat
							</option>
							<option
								value='Dog'
								selected={updatePet.type === "Dog" ? true : false}>
								Dog
							</option>
							<option
								value='Rabbit'
								selected={updatePet.type === "Rabbit" ? true : false}>
								Rabbit
							</option>
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
							value={updatePet.image}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
					<Button variant='secondary' onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default PetUpdateModal;
