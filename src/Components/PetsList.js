import React, { useState } from "react";
import PetItem from "./PetItem";
import store from "../petStore";
import { observer } from "mobx-react";
import PetCreateModal from "./PetCreateModal";
import { Button } from "react-bootstrap";

function PetsList() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);
	const handleShow = () => setIsOpen(true);

	const search = e => store.setQuery(e.target.value);
	const type = e => store.setType(e.target.value);
	const petList = store.pets
		.filter(
			pet =>
				pet.name.toLowerCase().includes(store.query.toLowerCase()) &&
				pet.type.includes(store.type)
		)
		.map(pet => <PetItem key={pet.id} pet={pet} />);
	return (
		<>
			<section id='doctors' className='doctor-section pt-140'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xxl-5 col-xl-6 col-lg-7'>
							<div className='section-title text-center mb-30'>
								<h1 className='mb-25 wow fadeInUp' data-wow-delay='.2s'>
									Fur-ends
								</h1>
								<div className='input-group rounded'>
									<input
										type='search'
										className='form-control rounded'
										placeholder='Search'
										aria-label='Search'
										aria-describedby='search-addon'
										onChange={search}
									/>
								</div>
								<br />
								Type:
								<select
									className='form-select'
									aria-label='Default select example'
									onChange={type}>
									<option value='' selected>
										All
									</option>
									<option value='Cat'>Cat</option>
									<option value='Dog'>Dog</option>
									<option value='Rabbit'>Rabbit</option>
								</select>
								<br />
								<Button
									className='mt-4 btn-lg'
									variant='outline-light'
									onClick={handleShow}>
									Add New Pet
								</Button>
							</div>
						</div>
					</div>

					<div className='row justify-content-center'>{petList}</div>
				</div>
			</section>
			<PetCreateModal isOpen={isOpen} handleClose={handleClose} />
		</>
	);
}
export default observer(PetsList);
