import { observer } from "mobx-react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import store from "../petStore";
import PetUpdateModal from "./PetUpdateModal";

const PetItem = ({ pet }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);
	const handleShow = () => setIsOpen(true);
	return (
		<div className='col-lg-4 col-md-8 col-sm-10'>
			<div className='single-doctor'>
				<img className='image' alt={pet.name} src={pet.image} />
				<div className='content'>
					<h3>{pet.name}</h3>
					<button
						type='button'
						className='btn btn-info'
						onClick={() => store.handleAdopt(pet.id)}>
						Adopt
					</button>
					<Button variant='info' onClick={handleShow}>
						Update
					</Button>
					<PetUpdateModal isOpen={isOpen} handleClose={handleClose} pet={pet} />
				</div>
			</div>
		</div>
	);
};

export default observer(PetItem);
