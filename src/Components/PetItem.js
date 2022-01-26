import { observer } from "mobx-react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import store from "../petStore";
import PetUpdateModal from "./PetUpdateModal";
import Highlighter from "react-highlight-words";

const PetItem = ({ pet, query }) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => setIsOpen(false);
	const handleShow = () => setIsOpen(true);

	return (
		<div className='col-lg-4 col-md-8 col-sm-10'>
			<div className='single-doctor'>
				<img className='image' alt={pet.name} src={pet.image} />
				<div className='content'>
					<h3>
						<Highlighter
							highlightStyle={{
								color: "rgb(255,255,255)",
								background: "rgba(0,0,0,0)",
							}}
							textToHighlight={pet.name}
							searchWords={[query]}
						/>
					</h3>
					<Button
						type='button'
						variant='info'
						className='m-2'
						onClick={() => store.handleAdopt(pet.id)}>
						Adopt
					</Button>
					<Button variant='info' className='m-2' onClick={handleShow}>
						Update
					</Button>
					<PetUpdateModal isOpen={isOpen} handleClose={handleClose} pet={pet} />
				</div>
			</div>
		</div>
	);
};

export default observer(PetItem);
