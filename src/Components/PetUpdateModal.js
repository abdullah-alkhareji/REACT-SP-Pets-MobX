import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import store from "../petStore";

const PetUpdateModal = ({ isOpen, handleClose, pet }) => {
	const [petInfo, setPetInfo] = useState(
		pet
			? pet
			: {
					name: "",
					type: "",
					image: "",
			  }
	);

	const handleChange = event =>
		setPetInfo({ ...petInfo, [event.target.name]: event.target.value });

	const handleUpdate = event => {
		event.preventDefault();
		store.updatePet(petInfo);
		handleClose();
	};

	const handleAdd = event => {
		event.preventDefault();
		store.addPet(petInfo);
		handleClose();
	};

	return (
		<Modal show={isOpen} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Update</Modal.Title>
			</Modal.Header>
			<Form onSubmit={petInfo.id ? handleUpdate : handleAdd}>
				<Modal.Body>
					<Form.Group>
						<Form.Label>Pet Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter Pet Name'
							name='name'
							onChange={handleChange}
							value={petInfo ? petInfo.name : ""}
						/>
					</Form.Group>
					<br />
					<Form.Group>
						<Form.Label>Pet Type</Form.Label>
						<Form.Select className='ms-3' name='type' onChange={handleChange}>
							<option>Select Type</option>
							<option
								value='Cat'
								selected={petInfo.type === "Cat" ? true : false}>
								Cat
							</option>
							<option
								value='Dog'
								selected={petInfo.type === "Dog" ? true : false}>
								Dog
							</option>
							<option
								value='Rabbit'
								selected={petInfo.type === "Rabbit" ? true : false}>
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
							value={petInfo ? petInfo.image : ""}
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
